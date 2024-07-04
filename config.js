const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_15_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODksXG4gICAgICAgIDY2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1LFxuICAgICAgICAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDcxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIsXG4gICAgICAgIDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg2LFxuICAgICAgICA4NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA3MixcbiAgICAgICAgMjIwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk2LFxuICAgICAgICA2LFxuICAgICAgICAyNDksXG4gICAgICAgIDQwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDkwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgODMsXG4gICAgICAgIDgyLFxuICAgICAgICA0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM4LFxuICAgICAgICA4MixcbiAgICAgICAgOTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpLSmQyM2cwTVNUR0R6N1RvSDludFJIYkh1Zm1FOFIzL3ZBSmtEMUVMQ1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE1ODY2MTE4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkIyMkNBQTQ0RkFCM0JDNDA0MEJFNjQ0NjlDMzU3OUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTI3NzQ5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImdyeGNwMHlUVGZxdEFUSURnZXktVkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmEzZTQ4M2ItYTMzNC00N2VlLWEzYWItMDg1ZGE1NjFjZDUxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgMzYsXG4gICAgICAxMDAsXG4gICAgICAxNzIsXG4gICAgICA5MSxcbiAgICAgIDIwNSxcbiAgICAgIDYxLFxuICAgICAgODYsXG4gICAgICAxOTEsXG4gICAgICA3NixcbiAgICAgIDE0NyxcbiAgICAgIDE5MixcbiAgICAgIDQwLFxuICAgICAgMTM3LFxuICAgICAgMjUsXG4gICAgICAzLFxuICAgICAgMjEzLFxuICAgICAgMjMyLFxuICAgICAgMTU2LFxuICAgICAgMTMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMixcbiAgICAgIDM0LFxuICAgICAgMTM1LFxuICAgICAgMjE1LFxuICAgICAgMTcxLFxuICAgICAgODAsXG4gICAgICAxNyxcbiAgICAgIDEzMCxcbiAgICAgIDQ0LFxuICAgICAgMTEzLFxuICAgICAgMTczLFxuICAgICAgODksXG4gICAgICA5OCxcbiAgICAgIDE5NixcbiAgICAgIDIyNCxcbiAgICAgIDIwNSxcbiAgICAgIDE5NSxcbiAgICAgIDE3MSxcbiAgICAgIDE5MyxcbiAgICAgIDM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBCWFQ5SFcyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTU4NjYxMTgyOjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiZGFuaWVsb2x1d2FwZWx1bWk4MDZcIixcbiAgICBcImxpZFwiOiBcIjI3ODI4ODQ2MzMzMTQwNzo0MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPZXAvaUVROTZHY3RBWVlDeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVhOXRzUE5SRmwrY0VLclVEaWxIbkpsSU54V0ZXVHB5dDVWems4SzJ3Umc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMU8wa21ZdDNPNTlFV1phbFhVL3AyNVpCVG5XdUpzT0N6djE4b3czQ1E1blhJcGdnRXBqdVduQWpubWQyNzNlQUZPVkFBVGIwOElDU0JpQ1MwOHAwQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibFFGNTZUSzNxSjFQWXVTN1NWcmVDUUNhYjI5RklNZFJwYzMyaUhSMUhJVXd1ZHhrSkFXU04zbkJBcWcrVE93TnBFN24yZlUzSWZNYTFvdTFvMGJpaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1ODY2MTE4Mjo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTI3NzQyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS1RjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLVGMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYMWdrbXRzVWNzRDVnUU9ZYTlQdUJhTlhURzZydm1EU0lFNHVaOWhBQ0tnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxMjc1NzUxLFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbMCw1LDgsOV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
