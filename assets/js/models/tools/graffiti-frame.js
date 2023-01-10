class GraffitiFrame extends Drawable {
  constructor(ctx, x, y, imgSrc) {
    super(ctx, x, y, 80, 80, 0, 0, 0, 0)

    this.img = null
    this.imgSrc = imgSrc
  }

  draw() {
    if (this.img) {
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    } else {
      this.ctx.strokeStyle = 'transparent'
      this.ctx.strokeRect(this.x, this.y, this.w, this.h)
    }
  }

  setImage() {
    this.img = new Image()
    this.img.src = this.imgSrc
  }

}
