import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';

import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

// Get total memory and free memory in bytes
const totalMemoryBytes = os.totalmem();
const freeMemoryBytes = os.freemem();

// Define unit conversions
const byteToKB = 1 / 1024;
const byteToMB = byteToKB / 1024;
const byteToGB = byteToMB / 1024;

// Function to format bytes to a human-readable format
function formatBytes(bytes) {
  if (bytes >= Math.pow(1024, 3)) {
    return (bytes * byteToGB).toFixed(2) + ' GB';
  } else if (bytes >= Math.pow(1024, 2)) {
    return (bytes * byteToMB).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes * byteToKB).toFixed(2) + ' KB';
  } else {
    return bytes.toFixed(2) + ' bytes';
  }
}
// Bot Process Time
const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds

// Uptime
const uptimeMessage = `*👑𝙸 𝚊𝚖 𝙰𝚕𝚒𝚟𝚎 𝙽𝚘𝚠👑 ${day}d ${hours}h ${minutes}m ${seconds}s*`;
const runMessage = `*☀️ ${day} Day*\n*🕐 ${hours} Hour*\n*⏰ ${minutes} Minutes*\n*⏱️ ${seconds} Seconds*\n`;

const xtime = moment.tz("Asia/Colombo").format("HH:mm:ss");
const xdate = moment.tz("Asia/Colombo").format("DD/MM/YYYY");
const time2 = moment().tz("Asia/Colombo").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

const test = async (m, Matrix) => {
  let selectedListId;
  const selectedButtonId = m?.message?.templateButtonReplyMessage?.selectedId;
  const interactiveResponseMessage = m?.message?.interactiveResponseMessage;
  if (interactiveResponseMessage) {
    const paramsJson = interactiveResponseMessage.nativeFlowResponseMessage?.paramsJson;
    if (paramsJson) {
      const params = JSON.parse(paramsJson);
      selectedListId = params.id;
     // console.log(selectedListId);
    }
  }
  const selectedId = selectedListId || selectedButtonId;
  
  const prefix = /^[\\/!#.]/gi.test(m.body) ? m.body.match(/^[\\/!#.]/gi)[0] : '.';
        const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).toLowerCase() : '';
        let ethix = {
    public: true // or false
};

let mode = ethix.public ? 'public' : 'private';

        const validCommands = ['list', 'help', 'menu'];

  if (validCommands.includes(cmd)) {
    let msg = generateWAMessageFromContent(m.from, {
      viewOnceMessage: {
        message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `╭─────────────━┈⊷
│👨‍💻 𝐁ᴏᴛ 𝐍ᴀᴍᴇ: *ᴍᴀꜱᴛᴇʀ-ᴍᴅ-ᴠ3*
│👨‍💻 𝐕ᴇʀꜱɪᴏɴ: 2.0.3
│👨‍💻 𝐎ᴡɴᴇʀ : *ᴍᴀꜱᴛᴇʀ ᴍɪɴᴅ*      
│👨‍💻 𝐍ᴜᴍʙᴇʀ: 94720797915
│👨‍💻 𝐏ʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│👨‍💻 𝐌ᴏᴅᴇ: *${mode}*
│👨‍💻 𝐏ʀᴇғɪx: *[Multi-Prefix]*
│👨‍💻 𝐃ᴇᴠᴇʟᴏᴘᴇʀ: *ᴍʀ ᴍᴀꜱᴛᴇʀ ᴏꜰᴄ*
╰─────────────━┈⊷ `
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "© 𝐂ʀᴇᴀᴛᴇᴅ 𝐁ʏ 𝐌ʀ 𝐒ᴀʜᴀɴ 𝐎ꜰᴄ"
            }),
            header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./src/master.jpg')}, { upload: Matrix.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: "",
                  hasMediaAttachment: false  
                }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  "name": "single_select",
                  "buttonParamsJson": `{"title":"👨‍💻𝚻𝚫𝚸 𝐅𝚯𝚪 𝚯𝚸𝚵𝚴 𝚳𝚵𝚴𝐔👨‍💻",
                 "sections":
                   [{
                    "title":"🔰𝙼𝙰𝚂𝚃𝙴𝚁-𝙼𝙳 𝙰𝙻𝙻 𝙼𝙴𝙽𝚄🔰",
                    "highlight_label":"👨‍💻𝗠𝗔𝗦𝗧𝗘𝗥-𝗠𝗗-𝗩𝟯👨‍💻",
                    "rows":[
                      {
                       "header":"",
                       "title":"🔰 ᴀʟʟ ᴍᴇɴᴜ",
                       "description":"☠️𝙼𝙰𝚂𝚃𝙴𝚁-𝙼𝙳 𝙰𝙻𝙻 𝙼𝙴𝙽𝚄☠️",
                       "id":"View All Menu"
                      },
                      {
                        "header":"",
                        "title":"⬇️ ᴅᴏᴡɴʟᴀᴏᴅᴇʀ ᴍᴇɴᴜ",
                        "description":"📂𝚂𝙷𝙾𝚆 𝙰𝙻𝙻 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝙳 𝙵𝙴𝙰𝚃𝚄𝚁𝙴𝚂🗂",
                        "id":"Downloader Menu"
                      },
                      {
                        "header":"",
                        "title":"ɢʀᴏᴜᴘ ᴍᴇɴᴜ",
                        "description":"🥵𝙵𝙴𝙰𝚃𝚄𝚁𝙴 𝚃𝙷𝙰𝚃 𝙰𝚁𝙴 𝙾𝙽𝙻𝚈 𝙰𝚅𝙰𝙸𝙻𝙰𝙱𝙻𝙴 𝙵𝙾𝚁 𝙶𝚁𝙾𝚄𝙿🥵",
                        "id":"Group Menu"
                      },
                      {
                        "header":"",
                        "title":"👨‍🔧 ᴛᴏᴏʟ ᴍᴇɴᴜ",
                        "description":"🛠 𝚂𝙷𝙾𝚆 𝙼𝙴 𝚃𝙾𝙾𝙻 𝙼𝙴𝙽𝚄🛠",
                        "id":"Tool Menu"
                      },
                      {
                        "header":"",
                        "title":"🗿 ᴍᴀɪɴ ᴍᴇɴᴜ",
                        "description":"📪 𝙱𝙾𝚃 𝙼𝙰𝙸𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂🗳",
                        "id":"Main Menu"
                      },
                     {
                        "header":"",
                        "title":"👨‍💻 ᴏᴡɴᴇʀ ᴍᴇɴᴜ",
                        "description":"😎𝙵𝙴𝙰𝚃𝚄𝚁𝙴 𝚃𝙷𝙰𝚃 𝙰𝚁𝙴 𝙾𝙽𝙻𝚈 𝙵𝙾𝚁 𝙼𝚈 𝙷𝙰𝙽𝙵𝚂𝙾𝙼𝙴 𝙾𝚆𝙽𝙴𝚁👨‍💼",
                        "id":"Owner Menu"
                      },
                      {
                        "header":"",
                        "title":"✨ ᴀɪ ᴍᴇɴᴜ",
                        "description":"💫 𝚂𝙷𝙾𝚆 𝙼𝙴 𝙰𝙸 𝙼𝙴𝙽𝚄 🎇",
                        "id":"Ai Menu"
                      },
                      {
                        "header":"",
                        "title":"🔍sᴇᴀʀᴄʜ ᴍᴇɴᴜ🔎",
                        "description":"♂️ 𝚂𝙷𝙾𝚆 𝙼𝙴 𝚂𝙴𝙰𝚁𝙲𝙷 𝙼𝙴𝙽𝚄",
                        "id":"Search Menu"
                      },
                      {
                        "header":"",
                        "title":"🧚‍♂️ sᴛᴀʟᴋ ᴍᴇɴᴜ",
                        "description":"👨‍💼 𝚂𝙷𝙾𝚆 𝙼𝙴 𝚂𝚃𝙰𝙻𝙺 𝙼𝙴𝙽𝚄😁",
                        "id":"Stalk Menu"
                      },
                      {
                        "header":"",
                        "title":"🥏 𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚛 𝚖𝚎𝚗𝚞",
                        "description":"🛷 𝚂𝙷𝙾𝚆 𝙼𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 𝙼𝙴𝙽𝚄✨",
                        "id":"Converter Menu"
                      }
                    ]}
                  ]}`
                },
              ],
            }),
            contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "MASTER-MD-V3",
                  serverMessageId: 143
                }
              }
          }),
        },
      },
    }, {});

    await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id
    });
  }
      if (selectedId == "View All Menu") {
        const mode = process.env.MODE;
        const str = `Hey ${m.pushName} ${pushwish}
╭─────────────━┈⊷
│👨‍💻 𝐁ᴏᴛ 𝐍ᴀᴍᴇ: *ᴍᴀꜱᴛᴇʀ-ᴍᴅ-ᴠ3*
│👨‍💻 𝐕ᴇʀꜱɪᴏɴ: 2.0.3
│👨‍💻 𝐎ᴡɴᴇʀ : *ᴍᴀꜱᴛᴇʀ ᴍɪɴᴅ*      
│👨‍💻 𝐍ᴜᴍʙᴇʀ: 94720797915
│👨‍💻 𝐏ʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│👨‍💻 𝐌ᴏᴅᴇ: *${mode}*
│👨‍💻 𝐏ʀᴇғɪx: *[Multi-Prefix]*
│👨‍💻 𝐃ᴇᴠᴇʟᴏᴘᴇʀ: *ᴍʀ ᴍᴀꜱᴛᴇʀ ᴏꜰᴄ*
╰─────────────━┈⊷ 
╭━❮ 🔰𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁🔰 ❯━╮
┃⚖ ${prefix}𝙰𝚃𝚃𝙿
┃⚖ ${prefix}𝙰𝚃𝚃𝙿2
┃⚖ ${prefix}𝙰𝚃𝚃𝙿3
┃⚖ ${prefix}𝙴𝙱𝙸𝙽𝙰𝚁𝚈
┃⚖ ${prefix}𝙳𝙱𝙸𝙽𝙰𝚁𝚈
┃⚖ ${prefix}𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
┃⚖ ${prefix}𝙼𝙿3
╰━━━━━━━━━━━━━━━⪼
╭━❮ 🔰𝙰𝙸🔰 ❯━╮
┃⚖ ${prefix}𝙰𝚒
┃⚖ ${prefix}𝙱𝚞𝚐
┃⚖ ${prefix}𝚁𝚎𝚙𝚘𝚛𝚝
┃⚖ ${prefix}𝙶𝚙𝚝
┃⚖ ${prefix}𝙳𝚊𝚕𝚕𝚎
┃⚖ ${prefix}𝚁𝚎𝚖𝚒𝚗𝚒
┃⚖ ${prefix}𝙶𝚎𝚖𝚒𝚗𝚒
╰━━━━━━━━━━━━━━━⪼
╭━❮ 🔰𝚃𝙾𝙾𝙻🔰 ❯━╮
┃⚖ ${prefix}𝙲𝚊𝚕𝚌𝚞𝚕𝚊𝚝𝚘𝚛
┃⚖ ${prefix}𝚃𝚎𝚖𝚙𝚖𝚊𝚒𝚕
┃⚖ ${prefix}𝙲𝚑𝚎𝚌𝚔𝚖𝚊𝚒𝚕
┃⚖ ${prefix}𝚃𝚛𝚝
┃⚖ ${prefix}𝚃𝚝𝚜
╰━━━━━━━━━━━━━━━⪼
╭━❮ 🔰𝙶𝚁𝙾𝚄𝙿🔰 ❯━╮
┃⚖ ${prefix}𝙻𝚒𝚗𝚔𝙶𝚛𝚘𝚞𝚙
┃⚖ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚐𝚌
┃⚖ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎
┃⚖ ${prefix}𝚂𝚎𝚝𝚍𝚎𝚜𝚌
┃⚖ ${prefix}𝙶𝚛𝚘𝚞𝚙
┃⚖ ${prefix}𝙶𝚌𝚜𝚎𝚝𝚝𝚒𝚗𝚐
┃⚖ ${prefix}𝚆𝚎𝚕𝚌𝚘𝚖𝚎
┃⚖ ${prefix}𝙰𝚍𝚍
┃⚖ ${prefix}𝙺𝚒𝚌𝚔
┃⚖ ${prefix}𝙷𝚒𝚍𝚎𝚃𝚊𝚐
┃⚖ ${prefix}𝚃𝚊𝚐𝚊𝚕𝚕
┃⚖ ${prefix}𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔
┃⚖ ${prefix}𝙰𝚗𝚝𝚒𝚃𝚘𝚡𝚒𝚌
┃⚖ ${prefix}𝙿𝚛𝚘𝚖𝚘𝚝𝚎
┃⚖ ${prefix}𝙳𝚎𝚖𝚘𝚝𝚎
┃⚖ ${prefix}𝙶𝚎𝚝𝚋𝚒𝚘
╰━━━━━━━━━━━━━━━⪼
╭━❮ 🔰𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳🔰 ❯━╮
┃⚖ ${prefix}𝙰𝚙𝚔
┃⚖ ${prefix}𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┃⚖ ${prefix}𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
┃⚖ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕
┃⚖ ${prefix}𝙶𝚒𝚝𝚌𝚕𝚘𝚗𝚎
┃⚖ ${prefix}𝙶𝚍𝚛𝚒𝚟𝚎
┃⚖ ${prefix}𝙸𝚗𝚜𝚝𝚊
┃⚖ ${prefix}𝚈𝚝𝚖𝚙3
┃⚖ ${prefix}𝚈𝚝𝚖𝚙4
┃⚖ ${prefix}𝙿𝚕𝚊𝚢
┃⚖ ${prefix}𝚂𝚘𝚗𝚐
┃⚖ ${prefix}𝚅𝚒𝚍𝚎𝚘
┃⚖ ${prefix}𝚈𝚝𝚖𝚙3𝚍𝚘𝚌
┃⚖ ${prefix}𝚈𝚝𝚖𝚙4𝚍𝚘𝚌
┃⚖ ${prefix}𝚃𝚒𝚔𝚝𝚘𝚔
╰━━━━━━━━━━━━━━━⪼
╭━❮ 🔰𝚂𝙴𝙰𝚁𝙲𝙷🔰 ❯━╮
┃⚖ ${prefix}𝙿𝚕𝚊𝚢
┃⚖ ${prefix}𝚈𝚝𝚜
┃⚖ ${prefix}𝙸𝚖𝚍𝚋
┃⚖ ${prefix}𝙶𝚘𝚘𝚐𝚕𝚎
┃⚖ ${prefix}𝙶𝚒𝚖𝚊𝚐𝚎
┃⚖ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
┃⚖ ${prefix}𝚆𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛
┃⚖ ${prefix}𝚆𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊
┃⚖ ${prefix}𝚈𝚝𝚜𝚎𝚊𝚛𝚌𝚑
┃⚖ ${prefix}𝚁𝚒𝚗𝚐𝚝𝚘𝚗𝚎
┃⚖ ${prefix}𝙻𝚢𝚛𝚒𝚌𝚜
╰━━━━━━━━━━━━━━━⪼
╭━❮ 🔰𝙼𝙰𝙸𝙽🔰 ❯━╮
┃⚖ ${prefix}𝙿𝚒𝚗𝚐
┃⚖ ${prefix}𝙰𝚕𝚒𝚟𝚎
┃⚖ ${prefix}𝙾𝚠𝚗𝚎𝚛
┃⚖ ${prefix}𝙼𝚎𝚗𝚞
┃⚖ ${prefix}𝙸𝚗𝚏𝚘𝚋𝚘𝚝
╰━━━━━━━━━━━━━━━⪼
╭━❮ 🔰𝙾𝚆𝙽𝙴𝚁🔰 ❯━╮
┃⚖ ${prefix}𝙹𝚘𝚒𝚗
┃⚖ ${prefix}𝙻𝚎𝚊𝚟𝚎
┃⚖ ${prefix}𝙱𝚕𝚘𝚌𝚔
┃⚖ ${prefix}𝚄𝚗𝚋𝚕𝚘𝚌𝚔
┃⚖ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚋𝚘𝚝
┃⚖ ${prefix}𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕
┃⚖ ${prefix}𝚂𝚎𝚝𝚜𝚝𝚊𝚝𝚞𝚜
┃⚖ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎𝚋𝚘𝚝
┃⚖ ${prefix}𝙰𝚞𝚝𝚘𝚃𝚢𝚙𝚒𝚗𝚐
┃⚖ ${prefix}𝙰𝚕𝚠𝚊𝚢𝚜𝙾𝚗𝚕𝚒𝚗𝚎
┃⚖ ${prefix}𝙰𝚞𝚝𝚘𝚁𝚎𝚊𝚍
┃⚖ ${prefix}𝚊𝚞𝚝𝚘𝚜𝚟𝚒𝚎𝚠
╰━━━━━━━━━━━━━━━⪼
╭━❮ 🔰𝚂𝚃𝙰𝙻𝙺🔰 ❯━╮
┃⚖ ${prefix}𝚃𝚛𝚞𝚎𝚌𝚊𝚕𝚕𝚎𝚛
┃⚖ ${prefix}𝙸𝚗𝚜𝚝𝚊𝚂𝚝𝚊𝚕𝚔
┃⚖ ${prefix}𝙶𝚒𝚝𝚑𝚞𝚋𝚂𝚝𝚊𝚕𝚔
╰━━━━━━━━━━━━━━━⪼
   `;
        let fgg = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: `MASTER-MD-V3`,
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'Ethix-MD'\nitem1.TEL;waid=${
                        m.sender.split("@")[0]
                    }:${
                        m.sender.split("@")[0]
                    }\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
            }
        };
       let { key } = await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/master.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "MASTER-MD-V3",
                  serverMessageId: 143
                }
              }
}, {
  quoted: fgg
});
}
   if ( selectedId == "Downloader Menu") {
     const str = `╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
│➥ 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁: ᴍʀ ᴍᴀꜱᴛᴇʀ ᴏꜰᴄ
╰━━━━━━━━━━━━━━━➥
╭━❮ 🔰𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳🔰 ❯━╮
┃⚖ ${prefix}𝙰𝚙𝚔
┃⚖ ${prefix}𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┃⚖ ${prefix}𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
┃⚖ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕
┃⚖ ${prefix}𝙶𝚒𝚝𝚌𝚕𝚘𝚗𝚎
┃⚖ ${prefix}𝙶𝚍𝚛𝚒𝚟𝚎
┃⚖ ${prefix}𝙸𝚗𝚜𝚝𝚊
┃⚖ ${prefix}𝚈𝚝𝚖𝚙3
┃⚖ ${prefix}𝚈𝚝𝚖𝚙4
┃⚖ ${prefix}𝙿𝚕𝚊𝚢
┃⚖ ${prefix}𝚂𝚘𝚗𝚐
┃⚖ ${prefix}𝚅𝚒𝚍𝚎𝚘
┃⚖ ${prefix}𝚈𝚝𝚖𝚙3𝚍𝚘𝚌
┃⚖ ${prefix}𝚈𝚝𝚖𝚙4𝚍𝚘𝚌
┃⚖ ${prefix}𝚃𝚒𝚔𝚝𝚘𝚔
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/master.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "MASTER-MD-V3",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if ( selectedId == "Group Menu") {
     const str = `╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
│➥ 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁: ᴍʀ ᴍᴀꜱᴛᴇʀ ᴏꜰᴄ
╰━━━━━━━━━━━━━━━➥
╭━❮ 🔰𝙶𝚁𝙾𝚄𝙿🔰 ❯━╮
┃⚖ ${prefix}𝙻𝚒𝚗𝚔𝙶𝚛𝚘𝚞𝚙
┃⚖ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚐𝚌
┃⚖ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎
┃⚖ ${prefix}𝚂𝚎𝚝𝚍𝚎𝚜𝚌
┃⚖ ${prefix}𝙶𝚛𝚘𝚞𝚙
┃⚖ ${prefix}𝚆𝚎𝚕𝚌𝚘𝚖𝚎
┃⚖ ${prefix}𝙰𝚍𝚍
┃⚖ ${prefix}𝙺𝚒𝚌𝚔
┃⚖ ${prefix}𝙷𝚒𝚍𝚎𝚃𝚊𝚐
┃⚖ ${prefix}𝚃𝚊𝚐𝚊𝚕𝚕
┃⚖ ${prefix}𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔
┃⚖ ${prefix}𝙰𝚗𝚝𝚒𝚃𝚘𝚡𝚒𝚌
┃⚖ ${prefix}𝙿𝚛𝚘𝚖𝚘𝚝𝚎
┃⚖ ${prefix}𝙳𝚎𝚖𝚘𝚝𝚎
┃⚖ ${prefix}𝙶𝚎𝚝𝚋𝚒𝚘
╰━━━━━━━━━━━━━━━⪼
     `
     await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/master.jpg'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: true,
  }
}, {
  quoted: m
});
}
   
   if (selectedId == "Main Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
│➥ 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁: ᴍʀ ᴍᴀꜱᴛᴇʀ ᴏꜰᴄ
╰━━━━━━━━━━━━━━━➥
╭━❮ 🔰𝙼𝙰𝙸𝙽🔰 ❯━╮
┃⚖ ${prefix}𝙿𝚒𝚗𝚐
┃⚖ ${prefix}𝙰𝚕𝚒𝚟𝚎
┃⚖ ${prefix}𝙾𝚠𝚗𝚎𝚛
┃⚖ ${prefix}𝙼𝚎𝚗𝚞
┃⚖ ${prefix}𝙸𝚗𝚏𝚘𝚋𝚘𝚝
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/master.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "MASTER-MD-V3",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Owner Menu") {
     const str = `╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
│➥ 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁: ᴍʀ ᴍᴀꜱᴛᴇʀ ᴏꜰᴄ
╰━━━━━━━━━━━━━━━➥
╭━❮ 🔰𝙾𝚆𝙽𝙴𝚁🔰 ❯━╮
┃⚖ ${prefix}𝙹𝚘𝚒𝚗
┃⚖ ${prefix}𝙻𝚎𝚊𝚟𝚎
┃⚖ ${prefix}𝙱𝚕𝚘𝚌𝚔
┃⚖ ${prefix}𝚄𝚗𝚋𝚕𝚘𝚌𝚔
┃⚖ ${prefix}𝙱𝚌𝚐𝚛𝚘𝚞𝚙
┃⚖ ${prefix}𝙱𝚌𝚊𝚕𝚕
┃⚖ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚋𝚘𝚝
┃⚖ ${prefix}𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕
┃⚖ ${prefix}𝚂𝚎𝚝𝚜𝚝𝚊𝚝𝚞𝚜
┃⚖ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎𝚋𝚘𝚝
┃⚖ ${prefix}𝙰𝚞𝚝𝚘𝚃𝚢𝚙𝚒𝚗𝚐
┃⚖ ${prefix}𝙰𝚕𝚠𝚊𝚢𝚜𝙾𝚗𝚕𝚒𝚗𝚎
┃⚖ ${prefix}𝙰𝚞𝚝𝚘𝚁𝚎𝚊𝚍
┃⚖ ${prefix}𝚊𝚞𝚝𝚘𝚜𝚟𝚒𝚎𝚠
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/master.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "MASTER-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Search Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
│➥ 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁: ᴍʀ ᴍᴀꜱᴛᴇʀ ᴏꜰᴄ
╰━━━━━━━━━━━━━━━➥
╭━❮ 🔰𝚂𝙴𝙰𝚁𝙲𝙷🔰 ❯━╮
┃⚖ ${prefix}𝙿𝚕𝚊𝚢
┃⚖ ${prefix}𝚈𝚝𝚜
┃⚖ ${prefix}𝙸𝚖𝚍𝚋
┃⚖ ${prefix}𝙶𝚘𝚘𝚐𝚕𝚎
┃⚖ ${prefix}𝙶𝚒𝚖𝚊𝚐𝚎
┃⚖ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
┃⚖ ${prefix}𝚆𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛
┃⚖ ${prefix}𝚆𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊
┃⚖ ${prefix}𝚈𝚝𝚜𝚎𝚊𝚛𝚌𝚑
┃⚖ ${prefix}𝚁𝚒𝚗𝚐𝚝𝚘𝚗𝚎
┃⚖ ${prefix}𝙻𝚢𝚛𝚒𝚌𝚜
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/master.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "MASTER-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   if (selectedId == "Stalk Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
│➥ 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁: ᴍʀ ᴍᴀꜱᴛᴇʀ ᴏꜰᴄ
╰━━━━━━━━━━━━━━━➥
╭━❮ 🔰𝚂𝚃𝙰𝙻𝙺🔰 ❯━╮
┃⚖ ${prefix}𝙽𝚘𝚠𝚊
┃⚖ ${prefix}𝚃𝚛𝚞𝚎𝚌𝚊𝚕𝚕𝚎𝚛
┃⚖ ${prefix}𝙸𝚗𝚜𝚝𝚊𝚂𝚝𝚊𝚕𝚔
┃⚖ ${prefix}𝙶𝚒𝚝𝚑𝚞𝚋𝚂𝚝𝚊𝚕𝚔
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/master.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "MASTER-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Tool Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
│➥ 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁: ᴍʀ ᴍᴀꜱᴛᴇʀ ᴏꜰᴄ
╰━━━━━━━━━━━━━━━➥
╭━❮ 🔰𝚃𝙾𝙾𝙻🔰 ❯━╮
┃⚖ ${prefix}𝙲𝚊𝚕𝚌𝚞𝚕𝚊𝚝𝚘𝚛
┃⚖ ${prefix}𝚃𝚎𝚖𝚙𝚖𝚊𝚒𝚕
┃⚖ ${prefix}𝙲𝚑𝚎𝚌𝚔𝚖𝚊𝚒𝚕
┃⚖ ${prefix}𝙸𝚗𝚏𝚘
┃⚖ ${prefix}𝚃𝚛𝚝
┃⚖ ${prefix}𝚃𝚝𝚜
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/master.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "MASTER-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Ai Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
│➥ 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁: ᴍʀ ᴍᴀꜱᴛᴇʀ ᴏꜰᴄ
╰━━━━━━━━━━━━━━━➥
╭━❮ 🔰𝙰𝙸🔰 ❯━╮
┃⚖ ${prefix}𝙰𝚒
┃⚖ ${prefix}𝙱𝚞𝚐
┃⚖ ${prefix}𝚁𝚎𝚙𝚘𝚛𝚝
┃⚖ ${prefix}𝙶𝚙𝚝
┃⚖ ${prefix}𝙳𝚊𝚕𝚕𝚎
┃⚖ ${prefix}𝚁𝚎𝚖𝚒𝚗𝚒
┃⚖ ${prefix}𝙶𝚎𝚖𝚒𝚗𝚒
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/master.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "MASTER-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Converter Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
│➥ 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁: ᴍʀ ᴍᴀꜱᴛᴇʀ ᴏꜰᴄ
╰━━━━━━━━━━━━━━━➥
╭━❮ 🔰𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁🔰 ❯━╮
┃⚖ ${prefix}𝙰𝚃𝚃𝙿
┃⚖ ${prefix}𝙰𝚃𝚃𝙿2
┃⚖ ${prefix}𝙰𝚃𝚃𝙿3
┃⚖ ${prefix}𝙴𝙱𝙸𝙽𝙰𝚁𝚈
┃⚖ ${prefix}𝙳𝙱𝙸𝙽𝙰𝚁𝚈
┃⚖ ${prefix}𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
┃⚖ ${prefix}𝙼𝙿3
╰━━━━━━━━━━━━━━━⪼
     `
     await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/master.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "MASTER-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
};

export default test;
