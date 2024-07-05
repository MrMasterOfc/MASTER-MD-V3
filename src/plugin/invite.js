const invite = async (m, gss) => {
  try {
    const prefixMatch = m.body.match(/^[\\/!#.]/);
    const prefix = prefixMatch ? prefixMatch[0] : '/';
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

    const validCommands = ['invite', 'add'];

    if (!validCommands.includes(cmd)) return;
    
    if (!m.isGroup) return m.reply("*📛 𝐓ʜɪꜱ 𝐂ᴏᴍᴍᴀɴᴅ 𝐂ᴀɴ 𝐎ɴʟʏ 𝐁ᴇ 𝐔ꜱᴇᴅ 𝐈ɴ 𝐆ʀᴏᴜᴘ 𝐃ᴇᴀʀ*");

    const text = m.body.slice(prefix.length + cmd.length).trim();
    
    const botNumber = await gss.decodeJid(gss.user.id);
    const isBotAdmins = groupMetadata.participants.find(p => p.id === botNumber)?.admin;

    if (!isBotAdmins) {
      return m.reply('*📛 𝐌ᴀꜱᴛᴇʀ-𝐌ᴅ 𝐁ᴏᴛ 𝐌ᴜꜱᴛ 𝐁ᴇ 𝐀ɴ 𝐀ᴅᴍɪɴ 𝐓ᴏ 𝐔ꜱᴇ 𝐓ʜɪꜱ 𝐂ᴏᴍᴍᴀɴᴅ*');
    }

    if (!text) return m.reply(`*📛 ᴇɴᴛᴇʀ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ɪɴᴠɪᴛᴇ ᴛᴏ ᴛʜᴇ ɢʀᴏᴜᴘ*\n\nExᴀᴍᴘʟᴇ:\n*${prefix + cmd}* 94720797915`);
    if (text.includes('+')) return m.reply(`*📛 ᴇɴᴛᴇʀ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏɢᴇᴛʜᴇʀ ᴡɪᴛʜᴏᴜᴛ *+*`);
    if (isNaN(text)) return m.reply(`*📛 ᴇɴᴛᴇʀ ᴏɴʟʏ ᴛʜᴇ ɴᴜᴍʙᴇʀꜱ ᴘʟᴜꜱ ʏᴏᴜʀ ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ ᴡɪᴛʜᴏᴜᴛ ꜱᴘᴀᴄᴇꜱ`);

    const group = m.from;
    const groupMetadata = await gss.groupMetadata(group);
    const link = 'https://chat.whatsapp.com/' + await gss.groupInviteCode(group);
    const inviteMessage = `≡ *GROUP INVITATION*\n\nA USER INVITES YOU TO JOIN THE GROUP "${groupMetadata.subject}".\n\nInvite Link: ${link}\n\nINVITED BY: @${m.sender.split('@')[0]}`;

    await gss.sendMessage(`${text}@s.whatsapp.net`, { text: inviteMessage, mentions: [m.sender] });
    m.reply(`*☑ AN INVITE LINK IS SENT TO THE USER.*`);

  } catch (error) {
    console.error('Error:', error);
    m.reply('An error occurred while processing the command.');
  }
};

export default invite;
