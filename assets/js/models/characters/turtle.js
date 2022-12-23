class Turtle extends Drawable {
  constructor(ctx) {
    super(ctx, 550, 0, 50, 90, -2, 0, 0, 0.5)

    this.y0 = this.ctx.canvas.height - this.h - 10

    this.img = new Image()
    this.img.src = './assets/img/police.png'
    // this.img.frames = 4
    // this.img.frameIndex = 0
    // this.tick = 0

  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

    // this.ctx.drawImage(
    // 	this.img,
    // 	this.img.frameIndex * this.img.width / this.img.frames,
    // 	0,
    // 	this.img.width / this.img.frames,
    // 	this.img.height,
    // 	this.x,
    // 	this.y,
    // 	this.w,
    // 	this.h
    // )
  }

  move() {
    super.move()

    if (this.y >= this.y0) {
      this.y = this.y0
      this.vy = 0
    }
  }

}