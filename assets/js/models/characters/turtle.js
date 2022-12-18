class Turtle extends Drawable {
  constructor(ctx) {
    super(ctx, 550, FLOOR_POSITION, 20, 30, -2, 0, 0, 0.5)

    this.y0 = FLOOR_POSITION

    // this.img = new Image()
    // this.img.src = '../../../img/turtle left.png'
    // this.img.frames = 4
    // this.img.frameIndex = 0
    // this.tick = 0

  }

  draw() {
    this.ctx.fillRect(this.x, this.y, this.w, this.h)
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

  isVisible() {
    return this.x + this.w >= 0 && this.x <= this.ctx.canvas.width
  }

}