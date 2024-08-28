module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "ArYan", 
	description: "Admin and Bot info.",
	usePrefix: true,
  commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.imgur.com/IpXKGL0.jpeg", 
            
            "https://i.imgur.com/IpXKGL0.jpeg", 
            
            ""];
var callback = () => api.sendMessage({body:`•—»✨ᗩᗪᗰIᑎ  ᗩᑎᗪ ᗷOT IᑎᖴO✨🤍
•┄┅═════❁🔥❁═════┅┄•

 b̆̈ŏ̈t̆̈ n̆̈ă̈m̆̈ĕ̈.: ${global.config.BOTNAME}

ᬁB̆̈ŏ̈t̆̈ Ă̈d̆̈m̆̈ĭ̈n̆̈༒ : Ă̈r̆̈Y̆̈ă̈n̆̈ C̆̈h̆̈ŏ̈w̆̈r̆̈ŭ̈r̆̈y̆̈

❦★B̆̈ŏ̈t̆̈ ă̈d̆̈m̆̈ĭ̈n̆̈ -ŏ̈w̆̈n̆̈ĕ̈r̆̈ Ă̈ğ̈ĕ̈: 18✧░▩◎◌◎

•┄┅══❁Ă̈d̆̈m̆̈ĭ̈n̆̈ c̆̈ŏ̈n̆̈t̆̈ă̈c̆̈t̆̈ ă̈l̆̈l̆̈ ĭ̈n̆̈f̆̈ŏ̈.❁══┅┄•
꧁☯☂️F̆̈ă̈c̆̈ĕ̈b̆̈ŏ̈ŏ̈k̆̈ ă̈c̆̈c̆̈ŏ̈ŭ̈n̆̈r̆t̆̈㟼 https://www.facebook.com/raj.vai.404

*•.¸♡m̆̈ĕ̈s̆̈s̆̈ĕ̈n̆̈ğ̈ĕ̈r̆̈ ĭ̈n̆̈b̆̈ŏ̈x̆̈༒ : https://m.me/Aryan.com.505


×º°”w̆̈h̆̈ă̈t̆̈s̆̈ă̈p̆̈p̆̈.n̆̈ŭ̈m̆̈b̆̈ĕ̈r̆̈: 01903910526

✪☠︎︎S̆̈ĕ̈ă̈r̆̈c̆̈h̆̈ ŏ̈n̆̈ t̆̈ĭ̈k̆̈t̆̈ŏ̈k̆̈: ă̈r̆̈y̆̈ă̈n̆̈c̆̈h̆̈ŏ̈w̆̈d̆̈h̆̈ŭ̈r̆̈y̆̈404


•┄┅═════❁ᚏB̆̈ŏ̈t̆̈.ĭ̈n̆̈f̆̈ŏ̈.★❁═════┅┄•

B̆̈ŏ̈t̆̈ n̆̈ă̈m̆̈ĕ̈  : ${global.config.BOTNAME}

👑༻B̆̈ŏ̈t̆̈.p̆̈r̆̈ĕ̈f̆̈ĭ̈x̆̈  ✘: ${global.config.PREFIX}

•┄┅═════❁ᚏB̆̈ŏ̈t̆̈ Ŭ̈p̆̈t̆̈ĭ̈m̆̈ĕ̈ ĭ̈n̆̈f̆̈ŏ̈ ❁═════┅┄•
•—»✨Ŭ̈p̆̈t̆̈ĭ̈m̆̈ĕ̈.

❈T̆̈ŏ̈d̆̈ă̈y̆̈ ĭ̈s̆̈ ༒: ${juswa} 
—͟͟͞͞𖣘B̆̈ŏ̈t̆̈ R̆̈ŭ̈n̆̈n̆̈ĭ̈n̆̈ğ̈ ŭ̈p̆̈t̆̈ĭ̈m̆̈ĕ̈ ༒
 ${hours}:${minutes}:${seconds}.
◤T̆̈h̆̈ă̈n̆̈k̆̈k̆̈`s̆̈ f̆̈ŏ̈r̆̈.Ŭ̈s̆̈ĭ̈n̆̈ğ̈ ${global.config.BOTNAME}\nT̆̈h̆̈ĭ̈s̆̈ b̆̈ŏ̈t̆̈ p̆̈r̆̈ŏ̈j̆̈ĕ̈c̆̈t̆̈ ŭ̈n̆̈d̆̈ĕ̈r̆̈ Ă̈R̆̈Y̆̈Ă̈N̆̈-R̆̈Ŏ̈B̆̈Ŏ̈T̆̈ •♥︎S̆̈ĕ̈r̆̈v̆̈ĕ̈r̆̈ f̆̈r̆̈ĕ̈ĕ̈ t̆̈h̆̈ĕ̈ p̆̈ŏ̈w̆̈ĕ̈r̆̈ ŏ̈f̆̈  Ă̈r̆̈Y̆̈ă̈n̆̈ ᬁ`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
