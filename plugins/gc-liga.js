const handler = async (m, {conn}) => {
  m.reply(global.liga);
};
handler.command = /^(liga|Liga)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.liga = `
𝗟𝗜𝗚𝗔 𝗩𝗩𝟮 𝗠𝗔𝗦𝗖

𝗛𝗢𝗥𝗔𝗥𝗜𝗢
🇵🇪 𝗣𝗘𝗥𝗨 :
🇦🇷 𝗔𝗥𝗚𝗘𝗡𝗧𝗜𝗡𝗔 :
🇨🇱 𝗖𝗛𝗜𝗟𝗘 :

¬ 𝐉𝐔𝐆𝐀𝐃𝐎𝐑𝐄𝐒 𝐏𝐑𝐄𝐒𝐄𝐍𝐓𝐄𝐒

🥷🏻 ┇ 
🥷🏻 ┇  
🥷🏻 ┇ 
🥷🏻 ┇ 
      

ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄:
🥷🏻 ┇ 
🥷🏻 ┇
`;
