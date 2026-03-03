import { Game } from "./DGamev3.js";
import { ShapesCharacter } from "./shapesCharacter.js";
// import jsonData from "./gamev9.json" with { type: "json" };

const game = new Game();
game.init("canvas", 800, 600, 1);

const char1 = new ShapesCharacter(10, 10, 20, 20, game);

game.draw = function (dt) {
  char1.draw(dt);
};

game.update = function (dt) {
  // game.moveCameraRMB();
  char1.update(dt);
};
