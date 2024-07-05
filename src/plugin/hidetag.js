const tagall = async (m, gss) => {
  try {
    // Ensure the function is async
    const botNumber = await gss.decodeJid(gss.user.id);
    const prefixMatch = m.body.match(/^[\\/!#.]/);
    const prefix = prefixMatch ? prefixMatch[0] : '/';
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
    
    // Check for the valid command
    const validCommands = ['hidetag'];
    if (!validCommands.includes(cmd)) return;


    const groupMetadata = await gss.groupMetadata(m.from);
    const participants = groupMetadata.participants;
    const botAdmin = participants.find(p => p.id === botNumber)?.admin;
    const senderAdmin = participants.find(p => p.id === m.sender)?.admin;
    
        if (!m.isGroup) return m.reply("*📛 𝐓ʜɪꜱ 𝐂ᴏᴍᴍᴀɴᴅ 𝐂ᴀɴ 𝐎ɴʟʏ 𝐁ᴇ 𝐔ꜱᴇᴅ 𝐈ɴ 𝐆ʀᴏᴜᴘ 𝐃ᴇᴀʀ*");

    if (!botAdmin) return m.reply("*📛 𝐌ᴀꜱᴛᴇʀ-𝐌ᴅ 𝐁ᴏᴛ 𝐌ᴜꜱᴛ 𝐁ᴇ 𝐀ɴ 𝐀ᴅᴍɪɴ 𝐓ᴏ 𝐔ꜱᴇ 𝐓ʜɪꜱ 𝐂ᴏᴍᴍᴀɴᴅ*");
    if (!senderAdmin) return m.reply("*📛 𝐘ᴏᴜ 𝐌ᴜꜱᴛ 𝐁ᴇ 𝐀ɴ 𝐀ᴅᴍɪɴ 𝐓ᴏ 𝐔ꜱᴇ 𝐓ʜɪꜱ 𝐂ᴏᴍᴍᴀɴᴅ*");
    // Extract the message to be sent
    let message = `乂 *Attention Everyone* 乂\n\n👨‍💻ＭＡＳＴＥＲ-ＭＤ-Ｖ3👨‍💻\n*Message:* ${m.body.slice(prefix.length + cmd.length).trim() || 'no message'}\n\n`;
        


    for (let participant of participants) {
      message += `❒ @${participant.id.split('@')[0]}\n`;
    }

    gss.sendMessage(m.from, { text: m.quoted.text ? m.quoted.text : '', mentions: participants.map(a => a.id) }, { quoted: m });
  } catch (error) {
    console.error('Error:', error);
    await m.reply('An error occurred while processing the command.');
  }
};

export default tagall;
