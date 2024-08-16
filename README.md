# OpenCompanion

Open source solution to create virtual companions powered by AI based on archived [ChatVRM](https://github.com/pixiv/ChatVRM) from pixiv Inc.

---

OpenCompanion is a demo application that allows you to easily converse with 3D characters in your browser.

By importing VRM files, you can adjust the voice to suit the character, generate responses that include emotional expressions, and more.

Each function of OpenCompanion mainly uses the following technologies.

- Recognizing the user's voice
    - [Web Speech API(SpeechRecognition)](https://developer.mozilla.org/ja/docs/Web/API/SpeechRecognition)
- Generate a response
    - [ChatGPT API](https://platform.openai.com/docs/api-reference/chat)
- Generate reading audio
    - [Koemotion/Koeiromap API](https://koemotion.rinna.co.jp/)
- Displaying 3D characters
    - [@pixiv/three-vrm](https://github.com/pixiv/three-vrm)


## Demo

Demo isn't available for now, because the project still work in progress.

## Run
To run locally, clone or download this repository.

```bash
git clone git@github.com:MitsuhaKitsune/OpenCompanion.git
```

Install the required packages.
```bash
npm install
```

After the packages are installed, start the development web server with the following command:
```bash
npm run dev
```

After execution, please access the following URL and check the operation.

[http://localhost:3000](http://localhost:3000)

## Update

To update this app, just go to app folder and pull the most recent changes from git
```bash
git pull origin main
```

Then install all possible new required packages
```bash
npm install
```

## Contribute

Feel free to contribute to this project, giving new ideas, making pull requests or reporting issues to fix.

---
