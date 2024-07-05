import config from '../../config.cjs';

const gcEvent = async (m, Matrix) => {
  const prefixMatch = m.body.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim().toLowerCase();

  if (cmd === 'welcome') {
    if (!m.isGroup) return m.reply("*📛 𝐓ʜɪꜱ 𝐂ᴏᴍᴍᴀɴᴅ 𝐂ᴀɴ 𝐎ɴʟʏ 𝐁ᴇ 𝐔ꜱᴇᴅ 𝐈ɴ 𝐆ʀᴏᴜᴘ 𝐃ᴇᴀʀ*");
    const groupMetadata = await Matrix.groupMetadata(m.from);
    const participants = groupMetadata.participants;
    const botNumber = await Matrix.decodeJid(Matrix.user.id);
    const botAdmin = participants.find(p => p.id === botNumber)?.admin;
    const senderAdmin = participants.find(p => p.id === m.sender)?.admin;

    if (!botAdmin) return m.reply("*📛 𝐌ᴀꜱᴛᴇʀ-𝐌ᴅ 𝐁ᴏᴛ 𝐌ᴜꜱᴛ 𝐁ᴇ 𝐀ɴ 𝐀ᴅᴍɪɴ 𝐓ᴏ 𝐔ꜱᴇ 𝐓ʜɪꜱ 𝐂ᴏᴍᴍᴀɴᴅ*");
    if (!senderAdmin) return m.reply("*📛 𝐘ᴏᴜ 𝐌ᴜꜱᴛ 𝐁ᴇ 𝐀ɴ 𝐀ᴅᴍɪɴ 𝐓ᴏ 𝐔ꜱᴇ 𝐓ʜɪꜱ 𝐂ᴏᴍᴍᴀɴᴅ*");
    let responseMessage;

    if (text === 'on') {
      config.WELCOME = true;
      responseMessage = "WELCOME & LEFT message has been enabled.";
    } else if (text === 'off') {
      config.WELCOME = false;
      responseMessage = "WELCOME & LEFT message has been disabled.";
    } else {
      responseMessage = "Usage:\n- `WELCOME on`: Enable WELCOME & LEFT message\n- `WELCOME off`: Disable WELCOME & LEFT message";
    }

    try {
      await Matrix.sendMessage(m.from, { text: responseMessage }, { quoted: m });
    } catch (error) {
      console.error("Error processing your request:", error);
      await Matrix.sendMessage(m.from, { text: 'Error processing your request.' }, { quoted: m });
    }
  }
};

export default gcEvent;
