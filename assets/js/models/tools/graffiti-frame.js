class GraffitiFrame extends Drawable {
  constructor(ctx, x, y) {
    super(ctx, x, y, 240, 180, 0, 0, 0, 0)
    
    this.img = null
  }

  draw() {
    if (this.img) {
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    } else {
      this.ctx.strokeRect(this.x, this.y, this.w, this.h)
    }
  }

  setImage(image) {
    this.img = image
  }

}
