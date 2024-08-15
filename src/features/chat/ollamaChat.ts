import { Message } from "../messages/messages";

export async function getChatResponse(messages: Message[]) {
  const { data } = await openai.createChatCompletion({
    model: "llama3:latest",
    messages: messages,
  });

  const [aiRes] = data.choices;
  const message = aiRes.message?.content || "An error has occurred";

  return { message: message };
}

export async function getChatResponseStream(
  messages: Message[]
) {

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const res = await fetch("http://127.0.0.1:11434/api/chat", {
    headers: headers,
    method: "POST",
    body: JSON.stringify({
      model: "llama3:latest",
      messages: messages,
    }),
  });

  const reader = res.body?.getReader();

  if (res.status !== 200 || !reader) {
    throw new Error("Something went wrong");
  }

  const stream = new ReadableStream({
    async start(controller: ReadableStreamDefaultController) {
      const decoder = new TextDecoder("utf-8");
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const data = decoder.decode(value);
          const chunks = data
            .split("data:")
            .filter((val) => !!val && val.trim() !== "[DONE]");
          for (const chunk of chunks) {
            const json = JSON.parse(chunk);

            const messagePiece = json.message.content;
            if (!!messagePiece) {
              controller.enqueue(messagePiece);
            }
          }
        }
      } catch (error) {
        controller.error(error);
      } finally {
        reader.releaseLock();
        controller.close();
      }
    },
  });

  return stream;
}
