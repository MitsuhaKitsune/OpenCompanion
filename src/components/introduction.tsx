import { useState, useCallback } from "react";
import { Link } from "./link";

type Props = {
  openAiKey: string;
  koeiroMapKey: string;
  onChangeAiKey: (openAiKey: string) => void;
  onChangeKoeiromapKey: (koeiromapKey: string) => void;
};
export const Introduction = ({
  openAiKey,
  koeiroMapKey,
  onChangeAiKey,
  onChangeKoeiromapKey,
}: Props) => {
  const [opened, setOpened] = useState(true);

  const handleAiKeyChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChangeAiKey(event.target.value);
    },
    [onChangeAiKey]
  );

  const handleKoeiromapKeyChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChangeKoeiromapKey(event.target.value);
    },
    [onChangeKoeiromapKey]
  );

  return opened ? (
    <div className="absolute z-40 w-full h-full px-24 py-40  bg-black/30 font-M_PLUS_2">
      <div className="mx-auto my-auto max-w-3xl max-h-full p-24 overflow-auto bg-white rounded-16">
        <div className="my-24">
          <div className="my-8 font-bold typography-20 text-secondary ">
            About this application
          </div>
          <div>
            You can enjoy conversations with 3D characters using a microphone, text input, and voice synthesis all in one web browser. You can also change the character (VRM), set its personality, and adjust its voice.
          </div>
        </div>
        <div className="my-24">
          <div className="my-8 font-bold typography-20 text-secondary">
            Technology Introduction
          </div>
          <div>
            To view and manipulate 3D models,
            <Link
              url={"https://github.com/pixiv/three-vrm"}
              label={"@pixiv/three-vrm"}
            />
            、 Conversation generation
            <Link
              url={
                "https://openai.com/blog/introducing-chatgpt-and-whisper-apis"
              }
              label={"ChatGPT API"}
            />
            、 For speech synthesis
            <Link url={"https://koemotion.rinna.co.jp/"} label={"Koemotion"} />
            の
            <Link
              url={
                "https://developers.rinna.co.jp/product/#product=koeiromap-free"
              }
              label={"Koeiromap API"}
            />
            We use the following. For details, see here
            <Link
              url={"https://inside.pixiv.blog/2023/04/28/160000"}
              label={"技術解説記事"}
            />
            Please see.
          </div>
          <div className="my-16">
            The source code for this demo is available on GitHub. Feel free to modify and adapt it!
            <br />
            Repository:
            <Link
              url={"https://github.com/pixiv/ChatVRM"}
              label={"https://github.com/pixiv/ChatVRM"}
            />
          </div>
        </div>

        <div className="my-24">
          <div className="my-8 font-bold typography-20 text-secondary">
            Usage notes
          </div>
          <div>
            Please do not intentionally induce discriminatory or violent comments, or comments that denigrate specific individuals. Also, when using a VRM model to replace a character, please follow the model's terms of use.
          </div>
        </div>

        <div className="my-24">
          <div className="my-8 font-bold typography-20 text-secondary">
            Koeiromap API key
          </div>
          <input
            type="text"
            placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
            value={koeiroMapKey}
            onChange={handleKoeiromapKeyChange}
            className="my-4 px-16 py-8 w-full h-40 bg-surface3 hover:bg-surface3-hover rounded-4 text-ellipsis"
          ></input>
          <div>
            Please issue an API key from rinna Developers.
            <Link
              url="https://developers.rinna.co.jp/product/#product=koeiromap-free"
              label="詳細はこちら"
            />
          </div>
        </div>
        <div className="my-24">
          <div className="my-8 font-bold typography-20 text-secondary">
            OpenAI API key
          </div>
          <input
            type="text"
            placeholder="sk-..."
            value={openAiKey}
            onChange={handleAiKeyChange}
            className="my-4 px-16 py-8 w-full h-40 bg-surface3 hover:bg-surface3-hover rounded-4 text-ellipsis"
          ></input>
          <div>
            APIキーは
            <Link
              url="https://platform.openai.com/account/api-keys"
              label="OpenAIのサイト"
            />
            You can get it by entering the API key in the form.
          </div>
          <div className="my-16">
            ChatGPT
            The API is accessed directly from your browser. In addition, API keys and conversation content are not stored on Pixiv's servers.
            <br />
            *The model used is ChatGPT API (GPT-3.5).
          </div>
        </div>
        <div className="my-24">
          <button
            onClick={() => {
              setOpened(false);
            }}
            className="font-bold bg-secondary hover:bg-secondary-hover active:bg-secondary-press disabled:bg-secondary-disabled text-white px-24 py-8 rounded-oval"
          >
            Enter your API key to get started
          </button>
        </div>
      </div>
    </div>
  ) : null;
};
