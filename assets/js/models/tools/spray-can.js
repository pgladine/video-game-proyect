class SprayCan extends Drawable {
  constructor(ctx, x) {
    super(ctx, x, 0, 20, 40, 0, 0, 0, 0.1)

    this.img = new Image()
    this.img.src = './assets/img/spray1.png'
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }

  // move() {
  //   super.move()
  // }
}