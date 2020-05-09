# telegram-log-forwarder
NodeJS exercise to expand my practical understanding of the language.
Uses the `node-telegram-bot-api` and `text-file-follower` modules to forward filtered logs to telegram.
By default, this script uses the linux `nohup` command to run the listener in the background.
Change this in `package.json` if required.

## Required modules:
* node-telegram-bot-api
* text-file-follower

## Usage:
1. Clone repo and cd into the folder:
  ```bash
  git clone https://www.github.com/timebotdon/telegram-log-forwarder
  cd telegram-log-forwarder
  ```

2. Install required modules:
  `npm install`

3. Define Telegram Bot API token and Chat ID in `config.json`.

4. Modify `index.js` and insert `logFile` and `pattern` information required:
  ```javascript
  const logFile = 'example.log';
  const pattern = /example/;
  ...
  ```
5. Run.
  `npm start`

## Shell script version
A smaller shell script for this purpose is also available:
https://gist.github.com/timebotdon/87d636651260d47f53ece7cbca8d4294
