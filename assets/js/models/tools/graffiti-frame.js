class GraffitiFrame extends Drawable {
  constructor(ctx, x, y) {
    super(ctx, x, y, 80, 80, 0, 0, 0, 0)

    this.img = null
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
    if (this.x === 220 && this.y === 20) {
      this.img = graffiti1
    }
    if (this.x === 300 && this.y === 20) {
      this.img = graffiti2
    }
    if (this.x === 220 && this.y === 100) {
      this.img = graffiti3
    }
    if (this.x === 300 && this.y === 100) {
      this.img = graffiti4
    }
    if (this.x === 220 && this.y === 180) {
      this.img = graffiti5
    }
    if (this.x === 300 && this.y === 180) {
      this.img = graffiti6
    }
  }

}
