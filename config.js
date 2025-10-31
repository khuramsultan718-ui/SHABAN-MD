const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid01XYkZZaGk3a0c2WEc5bFNXU21rd1NGYSs3UXJwcTFhUytqOXN4TkpVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDRweGtVSUpiMnVuMVVzVDE3cjJRR2ZRZ1NoZGkyMHdSb21Da1pJczZIcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSUhJL0RsS2piVDdZSmxqQ0pBeGpsQ0twV0FJY2J1eWhYRFM5Qm5hUkV3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0eXFPZEYybXFPZnNZV1crUnkrTlZTcStLNGdGMVlnMGovaGdkMDMwZVVVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlKYmlDWEVZTC9GTkRSellyY3VOVHpyTzJaaUNQNDVLYmFPKzluRkpHRTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZKbXA5Z1VVb040TmVDNzRGRTFhRDRlNExuOElNUytnV2g3Umc4Mm9iQkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0RXZlFYS2tlUVJuQ0ZFa0hvaW8wbk5aay9SYVNhWTFxZi9TNW5SbnVHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGo2VDVzTUt2VTRnSFhrVDgvUEhwK0NnVmhwS1IxcVFLU3VabVA0dUtDbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRSTkVmY0E5ZDR0RnBmdTArSHdGQzRDQmF2cVhCMTNLVjVRdVIzenBSQVI0NWxJd0IwNUZDTkdXZHNXS0JQVlpGQjRKc2haZ2lJYlZCQkNBbWV4ZEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcyLCJhZHZTZWNyZXRLZXkiOiIrV1d3Tjhpd1VqNkIrcDBLeG9mNzVNUmFSbExlTXYxWVQ1RWkyQWh1MDVNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJRSDVYSkVMTiIsIm1lIjp7ImlkIjoiOTIzNzAxNjE3MjU4OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Zj8yk8J2Zneqvrdi5IPCThqnLkM2i8J2QiM+7zIjMkPCdkIDht43wnZCN8JOGqeOAhs2OIPCSib3wkom9ICDwkom9ICDwkom9ICDwkom9ICAg8JKJvSAg8JKJvSAg8JOGqcSr1p/hjZ3NnMSrxp7MveqtmOGzuMmqzL3wnZCDyZvNosy9ybwiLCJsaWQiOiIxOTQ0OTgyMzE1MzM2Mjc6NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BxOXZZUUVFUHVua2NnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJDak5UKzNTd3lMRytVckZRQ2QzdHl0R2VzS2k3ZG14UmlBeEJQelhRUnM9IiwiYWNjb3VudFNpZ25hdHVyZSI6InV3Qm9kb1dyM2ZyNkJiZjN2R3BRZWxkTFAwZ1FwckhVTWduR2JLVkhWSG5YV3VBR0d5VDREekRFSXZCby8zeVJOczFqMHhjd1BwOE15Mk5MMWxsRUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzZ2I5V1IybWc4WUdMOWFwY2U0aDlWaWFMVlBjWWRnMEcrQ3hPcmxUNHNyNE10WW1pVm5XdHFZQWdORDNIWWEwVVNLTE9HUkErbUtFRDU5Y2x4dFVCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzcwMTYxNzI1ODo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRnb3pVL3Qwc01peHZsS3hVQW5kN2NyUm5yQ291M1pzVVlnTVFUODEwRWIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTg5MTMyNywibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCTmYifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW IMAN💥*",
// set the auto reply massage on status reply
AUTO_CHATBOT: process.env.AUTO_CHATBOT || "true", 
// "true" = default ON, "false" = default OFF
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "<a href="https://ibb.co/tT8X1wGv"><img src="https://i.ibb.co/39BzP53j/IMG-20251031-WA0117.jpg" alt="IMG-20251031-WA0117" border="0"></a>",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "𝙏̤𝙝꯭ع 𓆩ː͢𝐢ϻ̈̐𝐀᷍𝐍𓆩",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙏̤𝙝꯭ع 𓆩ː͢𝐢ϻ̈̐𝐀᷍𝐍𓆩",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "923303788282",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝙏̤𝙝꯭ع 𓆩ː͢𝐢ϻ̈̐𝐀᷍𝐍𓆩",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙏̤𝙝꯭ع 𓆩ː͢𝐢ϻ̈̐𝐀᷍𝐍𓆩*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "<a href="https://ibb.co/tT8X1wGv"><img src="https://i.ibb.co/39BzP53j/IMG-20251031-WA0117.jpg" alt="IMG-20251031-WA0117" border="0"></a>",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923303788282",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "true",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
