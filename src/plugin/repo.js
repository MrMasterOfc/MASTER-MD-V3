import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

const alive = async (m, Matrix) => {
  const uptimeSeconds = process.uptime();
  const days = Math.floor(uptimeSeconds / (24 * 3600));
  const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeSeconds % 60);
  
  const prefix = /^[\\/!#.]/gi.test(m.body) ? m.body.match(/^[\\/!#.]/gi)[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).toLowerCase() : '';
    if (['repo', 'sc'].includes(cmd)) {

  const uptimeMessage = `
_________________________________________
*🔰GitHub Profile - @MrMasterOfc*
*🔰Name: 𝙎𝙖𝙝𝙖𝙣 𝙈𝙖𝙙𝙪𝙬𝙖𝙣𝙩𝙝𝙖👨‍💻*
*🔰Username:* @MrMasterOfc
*🔰Bio: 𝐌𝐚𝐬𝐭𝐞𝐫_𝐲𝐨𝐮𝐫_𝐌𝐢𝐧𝐝*
*𝐌𝐚𝐬𝐭𝐞𝐫_𝐲𝐨𝐮𝐫_𝐋𝐢𝐟𝐞*
*@𝐬𝐚𝐡𝐚𝐧𝐚𝐲𝐚𝟐𝟎𝟎𝟔*
*🔰IDID:* 125999503
*🔰Node IDD:* U_kgDOB4KZjw
*🔰Profile URL:* https://avatars.githubusercontent.com/u/125999503?v=4
*🔰GitHub URL:* https://github.com/MrMasterOfc
*🔰Adminin:* No
*🔰Companyy:* MASTER MIND
*🔰Blogg:* https://mr-sahan-ofc.vercel.app/index.html
*🔰Locationon:* Asia/Colombo
*🔰Emailil:* N/A
*🔰Public Repositorieses:* 13
_________________________________________
`;

  const buttons = [
        {
          "name": "cta_url",
          "buttonParamsJson": JSON.stringify({
            display_text: "GITHUB",
            url: `https://github.com/MrMasterOfc/MASTER-MD-V3/fork`
          })
        },
        {
          "name": "quick_reply",
          "buttonParamsJson": JSON.stringify({
            display_text: "MENU",
            id: `.menu`
          })
        }
        ];

  const msg = generateWAMessageFromContent(m.from, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: uptimeMessage
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "© 𝐂ʀᴇᴀᴛᴇᴅ 𝐁ʏ 𝐌ʀ 𝐒ᴀʜᴀɴ 𝐎ꜰᴄ"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            gifPlayback: true,
            subtitle: "",
            hasMediaAttachment: false 
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "MASTER-MD-V3 GITHUB",
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
};

export default alive;
