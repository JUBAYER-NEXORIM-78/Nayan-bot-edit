module.exports = {
  config: {
    name: "ephoto",
    version: "2.0.0",
    permission: 0,
    credits: "Nayan",
    description: "",
    prefix: true,
    category: "user",
    usages: "text",
    cooldowns: 5,
    dependencies: {
    
    }
  },

  start: async function ({ nayan, events, args, NAYAN }) {
    if (!NAYAN) {
      return nayan.reply(`[❌] Unsupported this file your bot`, events.threadID);
    }
    NAYAN.react("⏳️")
    const { messageID, threadID } = events;
    const fs = require("fs");
    const axios = require("axios");
    const request = require("request");
    const prompt = args.join(" ");
    if (!args[0]) return nayan.reply(`🔰Use ${global.config.PREFIX}${this.config.name} [no.] [text]\n🔰Example:${global.config.PREFIX}${this.config.name} 1 nayan\n\n🔥Total Edit limit 10...`, threadID, messageID);
    const content = args.join(" ");
    const msg = content.split(" ");
    const number = msg[0].trim();
    const name = msg.slice(1).join(" ").trim();
    const { ephoto } = require('nayan-api-server');
    var url = "";
    if (number == "1"){ url = "https://ephoto360.com/hieu-ung-chu/tao-hieu-ung-chu-mam-anh-sang-74.html"}
    else if (number == "2"){ url = "https://ephoto360.com/hieu-ung-chu/chu-kim-loai-tong-vang-ruc-215.html"}
    else if (number == "3"){ url = "https://ephoto360.com/tao-hieu-ung-chu-neon-da-sac-truc-tuyen-985.html"}
    else if (number == "4"){ url = "https://ephoto360.com/hieu-ung-chu-phong-cach-logo-naruto-shippuden-1001.html"}
    else if (number == "5"){ url = "https://ephoto360.com/hieu-ung-chu/chu-kim-loai-tong-mau-tim-175.html"}
    else if (number == "6"){ url = "https://ephoto360.com/hieu-ung-chu/neon-canh-ac-quy-online-808.html"}
    else if (number == "7"){ url = "https://ephoto360.com/tao-avatar-video-theo-cac-bieu-tuong-online-629.html"}
    else if (number == "8"){ url = "https://ephoto360.com/hieu-ung-chu-anh-sang-theo-phong-cach-cong-nghe-tuong-lai-769.html"}
    else if (number == "9"){ url = "https://ephoto360.com/tao-avatar-chu-canh-thien-than-nhieu-mau-893.html"}
    else if (number == "10"){ url = "https://ephoto360.com/hieu-ung-viet-chu-len-cua-so-mua-truc-tuyen-806.html"}
    else if (number == "11"){ url = "https://ephoto360.com/hieu-ung-tao-chu-ky-anh-sang-nhieu-mau-sac-686.html"}
    else if (number == "12"){ url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-sao-online-85.html"}
    else if (number == "13"){ url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-mau-sac-160.html"}
    else if (number == "14"){ url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-cam-thach-hoa-van-275.html"}
    else if (number == "15"){ url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-da-quy-hong-ngoc-3d-281.html"}
    else if (number == "16"){ url = "https://ephoto360.com/tao-logo-phong-cach-pornhub-612.html"}
    else if (number == "17"){ url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-galaxy-canh-thien-than-moi-289.html"}
    else if (number == "18"){ url = "https://ephoto360.com/tao-logo-mascot-phong-cach-galaxy-462.html"}
    else if (number == "19"){ url = "https://ephoto360.com/tao-hinh-nen-cho-dien-thoai-theo-phong-cach-galaxy-cuc-chat-586.html"}
    else if (number == "20"){ url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-anh-long-chu-217.html"}
    else if (number == "21"){ url = "https://ephoto360.com/hieu-ung-chu/tao-avatar-gold-pro-303.html"}
    else if (number == "22"){ url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-dance-text-312.html"}
    else if (number == "23"){ url = "https://ephoto360.com/hieu-ung-ve/mau-logo-avatar-galaxy-wolf-cuc-chat-366.html"}
    else if (number == "24"){ url = "https://ephoto360.com/hieu-ung-viet-chu-3d-len-bai-bien-814.html"}
    else if (number == "25"){ url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-typography-online-dark-green-typo-359.html"}
    else if (number == "27"){ url = "https://ephoto360.com/hieu-ung-chu/viet-chu-vang-ngoc-online-285.html"}
    else if (number == "28"){ url = "https://ephoto360.com/hieu-ung-ve/tao-hieu-ung-chu-ban-dem-hieu-ung-lend-cho-chu-147.html"}
    else if (number == "29"){ url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-giot-nuoc-106.html"}
    else if (number == "30"){ url = "https://ephoto360.com/hieu-ung-chu/tao-chu-duoi-nuoc-73.html"}
    else if (number == "31"){ url = "https://ephoto360.com/hieu-ung-chu/chu-canh-thien-than-176.html"}
    else if (number == "32"){ url = "https://ephoto360.com/hieu-ung-chu-phao-bong-356.html"}
    else if (number == "33"){ url = "https://ephoto360.com/tao-hieu-ung-chu-digital-glitch-truc-tuyen-941.html"}
    else if (number == "34"){ url = "https://ephoto360.com/hieu-ung-chu/tao-chu-bang-tuyet-107.html"}
    else if (number == "35"){ url = "https://ephoto360.com/tao-logo-avatar-du-lich-phong-cach-den-trang-643.html"}
    else if (number == "36"){ url = "https://ephoto360.com/tao-logo-hoa-ma-vang-de-xay-dung-thuong-hieu-719.html"}
    else if (number == "37"){ url = "https://ephoto360.com/tao-logo-phong-cach-may-chieu-3d-518.html"}
    else if (number == "38"){ url = "https://ephoto360.com/tao-logo-theo-ten-phong-cach-galaxy-460.html"}
    else if (number == "39"){ url = "https://ephoto360.com/hieu-ung-chu/tao-chu-phong-cac-retro-67.html"}
    else if (number == "40"){ url = "https://ephoto360.com/che-video-trung-thu-fa-voi-ten-cua-ban-700.html"}
    else if (number == "41"){ url = "https://ephoto360.com/tao-avatar-video-pubg-phong-cach-nhieu-song-glitch-627.html"}
    else if (number == "42"){ url = "https://ephoto360.com/tao-anh-bia-one-piece-dao-hai-tac-truc-tuyen-cuc-dep-626.html"}
    else if (number == "43"){ url = "https://ephoto360.com/tao-avatar-video-theo-cac-bieu-tuong-online-629.html"}
    else if (number == "44"){ url = "https://ephoto360.com/sinh-nhat/ghi-loi-chuc-len-banh-sinh-nhat-229.html"}
    else if (number == "45"){ url = "https://ephoto360.com/tao-anh-bia-7-vien-ngoc-rong-dragon-ball-online-dep-doc-chat-nhat-476.html"}
    else if (number == "46"){ url = "https://ephoto360.com/hieu-ung-lua/hieu-ung-chu-canh-lua-372.html"}
    else if (number == "47"){ url = "https://ephoto360.com/tao-hieu-ung-chu-neon-da-sac-truc-tuyen-985.html"}
    else if (number == "48"){ url = "https://ephoto360.com/tao-hinh-nen-dien-thoai-galaxy-theo-ten-dep-full-hd-684.html"}
    else if (number == "49"){ url = "https://ephoto360.com/tao-typography-nghe-thuat-cho-anh-cua-ban-404.html"}
    else if (number == "50"){ url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-neon-anh-sang-200.html"}
    // Add the rest of the conditions
    try {
      let data = await ephoto(url, name);
      console.log(data);
      var file = fs.createWriteStream(__dirname + '/cache/ephoto.jpg');
      const link = data.url;
      const rqs = request(encodeURI(`${link}`));
      NAYAN.react("✅")
      rqs.pipe(file);
      file.on('finish', () => {
        setTimeout(function () {
          return nayan.reply({
            body: `❐ THIS IS YOUR NAME EDIT ✌️\n\n___________________________________\n\n❐ This Bot Name : ${global.config.BOTNAME} 🤖\n❐ This Bot Owner : FARHAN_ISLAM\n❐ Your Input Name : ${name}\n\n___________________________________`,
            attachment: fs.createReadStream(__dirname + '/cache/ephoto.jpg')
          }, threadID, messageID)
        }, 5000)
      })
    } catch (err) {
      NAYAN.react("❌")
      nayan.reply(`🔰Use ${global.config.PREFIX}${this.config.name} [no.] [text]\n🔰Example:${global.config.PREFIX}${this.config.name} 1 nayan\n\n🔥Total Edit limit 10...`, events.threadID, events.messageID);
    }
  }
}
