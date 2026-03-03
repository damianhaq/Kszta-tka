import { drawCircleOnMap, Vector } from "./DGamev3.js";

export class ShapesCharacter {
  constructor(x, y, width, height, game) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.game = game;

    this.vel = new Vector(0, 0);
    this.acc = new Vector(0, 0);
    this.accSpeed = 0.5;
    this.moveSpeed = 3;
  }

  update(dt) {
    // when i press one of the keys, apply accSpeed value to acc Vector
    if (this.game.keys.key[65]) {
      this.acc.x = -this.accSpeed; // if pressed a
    } else if (this.game.keys.key[68]) {
      this.acc.x = this.accSpeed; // if pressed d
    } else {
      // dont accelerate
      this.acc.x = 0;

      // slow down
      if (this.vel.x > 0) {
        this.vel.x = +(this.vel.x - this.accSpeed).toFixed(2);
        if (this.vel.x < 0.01) this.vel.x = 0; // cut slowing down when he is really slow
      } else if (this.vel.x < 0) {
        this.vel.x = +(this.vel.x + this.accSpeed).toFixed(2);
        if (this.vel.x > 0.01) this.vel.x = 0; // cut slowing down when he is really slow
      }
    }
    if (this.game.keys.key[87]) {
      this.acc.y = -this.accSpeed; // if pressed w
    } else if (this.game.keys.key[83]) {
      this.acc.y = this.accSpeed; // if pressed s
    } else {
      this.acc.y = 0;

      if (this.vel.y > 0) {
        this.vel.y = +(this.vel.y - this.accSpeed).toFixed(2);
        if (this.vel.y < 0.01) this.vel.y = 0; // cut slowing down when he is really slow
      } else if (this.vel.y < 0) {
        this.vel.y = +(this.vel.y + this.accSpeed).toFixed(2);
        if (this.vel.y > 0.01) this.vel.y = 0; // cut slowing down when he is really slow
      }
    }

    // add acc to vel
    this.vel.add(this.acc);

    // limit vel
    this.vel.limit(this.moveSpeed);

    // add vel to pos
    this.x += this.vel.x;
    this.y += this.vel.y;
  }

  draw(dt) {
    drawCircleOnMap(
      this.x,
      this.y,
      this.width,
      this.game.ctx,
      this.game.camera,
      "black",
      2,
    );
  }
}
