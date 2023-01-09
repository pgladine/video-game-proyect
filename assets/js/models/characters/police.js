class Police extends Drawable {
  constructor(ctx) {
    super(ctx, 550, 0, 70, 100, -2, 0, 0, 0.5)

    this.y0 = this.ctx.canvas.height - this.h - 10

    this.img = new Image()
    this.img.src = './assets/img/Police-Character-removebg-preview.png'
    this.img.frames = 5
    this.img.frameIndex = 4
    this.tick = 0
    this.speechCloud = new SpeechCloud(this.ctx, this.x, this.y)
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * this.img.width / this.img.frames,
      0,
      this.img.width / this.img.frames,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    )

    this.animate()
  }

  animate() {
    if (this.tick++ > 28) {
      this.tick = 0
      this.img.frameIndex--

      if (this.img.frameIndex < 0) {
        this.img.frameIndex = this.img.frames - 1
      }
    }
  }

  move() {
    super.move()

    if (this.y >= this.y0) {
      this.y = this.y0
      this.vy = 0
    }
  }

  yell() {
    const x = this.x + this.w / 2
    const y = this.y - this.speechCloud.h

    this.speechCloud = new SpeechCloud(this.ctx, x, y)

    this.speechCloud.draw()

  }

}