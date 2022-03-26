import ImageCommand from "../../classes/imageCommand.js";

class SoyjakCommand extends ImageCommand {
  static description = "Soyjaks pointing at your image of choice.";

  static noImage = "You need to provide an image/GIF for soyjaks to react to!";
  static command = "soyjak";
}

export default SoyjakCommand;
