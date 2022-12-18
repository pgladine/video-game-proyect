class WasteBin extends Drawable {
  constructor(ctx, x, y) {
    super(ctx, x, y, 70, 100, 0, 0, 0, 0)

    this.img = new Image()
    this.img.src = './assets/img/cubo.png'
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }


}