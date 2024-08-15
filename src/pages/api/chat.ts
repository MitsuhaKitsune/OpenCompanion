import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const { data } = await fetch("http://127.0.0.1:11434/api/chat", {
    headers: headers,
    method: "POST",
    body: JSON.stringify({
      model: "llama3:latest",
      messages: req.body.messages,
    }),
  });

  const [aiRes] = data.message;
  const message = data.message?.content || "An error has occurred";

  res.status(200).json({ message: message });
}
