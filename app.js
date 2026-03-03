import { Game } from "./DGamev3.js";
// import jsonData from "./gamev9.json" with { type: "json" };

const game = new Game();
game.init("canvas", 800, 600, 2);

const bigSpritev7 = new Image();
bigSpritev7.src = "BigSpritev7.png";

// Game loop
requestAnimationFrame(gameLoop);
let lastTime = 0;
function gameLoop(timestamp) {
  const deltaTime = +(timestamp - lastTime).toFixed(2);
  lastTime = timestamp;

  update(deltaTime);

  draw(deltaTime);

  requestAnimationFrame(gameLoop);
}

function update(deltaTime) {}
function draw(deltaTime) {}
