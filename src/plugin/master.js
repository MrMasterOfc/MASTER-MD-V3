import amd from './src/plugin';

amd(
  {
    pattern: "master", // The Command Name
    alias: "hello,hi,Hi,hey" // Command Secondary Trigger
    fromMe: true, // is the message from the owner
    desc: "Send Hi Message", // Command Description
    type: "Test", // Command Category
  },
  async (message) => {
    await message.send("*මෙම අවස්ථාවෙ ඔබ සොයන ග්‍රාහකයා නොහැක හලොව්*..🥲🤜
*එම නිසා පසුව අමතන්න*.. 🥹

          ©*Tiger Mind*");
  }
);
