const gm = require("gm").subClass({
  imageMagick: true
});
const gmToBuffer = require("../utils/gmbuffer.js");

exports.run = async (message) => {
  message.channel.sendTyping();
  const image = await require("../utils/imagedetect.js")(message);
  if (image === undefined) return `${message.author.mention}, you need to provide an image to add a iFunny watermark!`;
  const watermark = "./assets/images/ifunny.png";
  gm(image.data).size(async (error, size) => {
    if (error) throw error;
    const data = gm(image.data).append(watermark).gravity("South").resize(size.width, null);
    const resultBuffer = await gmToBuffer(data);
    return message.channel.createMessage("", {
      file: resultBuffer,
      name: `ifunny.${image.type}`
    });
  });
};

exports.category = 5;
exports.help = "Adds the iFunny watermark to an image";