//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "true";
global.video = "true";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/fredietechTZ/Frecyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1d4a42b28790d0f7a7195.jpg";
global.devs = "255620814108,255764182801,255776663848";
global.sudo = process.env.SUDO || "255620814108,255764182801,255776663848";
global.owner = process.env.OWNER_NUMBER ||"255612419246";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUIzYUpwakpqVEIyUE1KZjZPWGhrNXMrTzRtcnU0WUQrcjZOL2l3cmRsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmE2WTY2TFJlYk15cGlQSXh5dUdDV2dHNEFKMURtbXhTRWRvVFZqSjlqST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSHJMUWNyWUdJVFRPWjdLYjhWam12TmNMRk5WK3k3OVJjZHphbE5mM1g4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpam5qNTlaSE9waUZMdDlaTGF6Nk5YOTYwcGJkRDY0ekIvU2d5VGhVcUNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlOdGR5Znlsa21STUhYcENETmd1bEtEU1d5Z0trL2ZUM3gwSXNtTHBkbjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRHU0lBcFVsU2xtTmpsL1dTZllLTUsyT3VWMXFsNi9LZzgwTE1lR3ZSQnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic01DaWhLZEFuSFlJczE4M3dicEVQWDNvRGIraVBqa0h3RUVUdTFrc3NGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidTBESWx6LzBOVGhNRnFlRmxGOEZxb2I5VnVvTmd5OE91UTlnbEloYVAyRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNQSmxGNWFHWWdGMjIvb1lURmd5MVZLVzVLMzYrVmFlVjFKbEZnUUNyQWFPZzZVcEhsY2FadU5oRDJrSHgzWGk2RzNaeElWU3RuVTExM2tOdFpKTGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMwLCJhZHZTZWNyZXRLZXkiOiJJYWc1SEJ0Vkg4clVzZE5odG0vSEc0NFp2bklnS1NhK2U5OEhxWWtiTFpJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTYxMjQxOTI0NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3MTM3NzMzRkM1MzdFRTAyQjAwRDA0NEU5MTIzOUM4QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMTg5MDQxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzUzRZUTNKc1FUMnpYbDBBMHpFVVBnIiwicGhvbmVJZCI6Ijc4Nzc5ZTBkLWJmODAtNGQxNC1hNThmLTY3ODBjODdhNDE1NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCdjNIM2RFMUs4amFzb0pzMVBjeUZuVzF2UU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUlLK2hoTk1IckhXSG9rb29iY3A3d09oN09BPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkY1OTgyUUVRIiwibWUiOnsiaWQiOiIyNTU2MTI0MTkyNDY6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZS94oSd8J2UvPCdlLvwnZWA8J2UvF/wnZWL8J2UvOKEguKEjcmqybTSk+G0jyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDY5MExZQkVONkptclVHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU2ozZCtKbHpYc3NOVGxOdks0ZU15Y095UGdnNzhMUDRQMGhQNzZBclJUMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTjBsV2dVZUNZUXRlaTFHRFd3Y0tUKzA2Q1YrY3NRU3Y2WW05YWF6eE9NT1Uvc0ltN2x6TGZXMU5QSld3WXZ4Z21VZXgvSWkxNXhCa1pPQXBTd1JxQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IlR4SmFDSm1tYmRXL2FmQy93b0pRTERoZVdCdGExcllubEtuODR5TE96L3dERlBiOFNySXdsTXVDazVrUThaU1A1SEt5alYzMnQxV2gySHZ1MDIvUGdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NjEyNDE5MjQ2OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVW85M2ZpWmMxN0xEVTVUYnl1SGpNbkRzajRJTy9DeitEOUlUKytnSzBVOSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjE4OTAzNiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKSE0ifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐅𝚪𝚵𝐂𝐘𝚩𝚵𝚪 𝚳𝐃",
  author: process.env.PACK_AUTHER || "FRECYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FRECYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "FRECYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
