class Peach extends Drawable {
  constructor(ctx) {
    super(ctx, 50, FLOOR_BOTTOM, 80, 100, 0, 0, 0, 0.5)

    this.y0Bottom = FLOOR_BOTTOM
    this.y0Top = FLOOR_TOP

    this.floor = this.y

    this.img = new Image()
    this.img.src = './assets/img/girl-sprite-sheet2.png'
    this.img.frames = 7
    this.img.frameIndex = 0
    this.tick = 0

    this.spraysToUse = 0

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
    if (this.tick++ > 15) {
      this.tick = 0
      this.img.frameIndex++

      if (this.img.frameIndex > this.img.frames - 1) {
        this.img.frameIndex = 0
      }
    }
  }

  move() {
    super.move()

    if (this.ay && this.y >= this.floor) {
      this.y = this.floor
      this.vy = 0
      this.y0Top = FLOOR_TOP
      this.ay = 0
    }

    if (this.y >= this.y0Bottom) {
      this.vy = 0
      this.y = this.y0Bottom
    }

    if (this.y <= this.y0Top) {
      this.vy = 0
      this.y = this.y0Top
    }

    if (this.x <= 0) {
      this.vx = 0
      this.x = 0
    }

    if (this.x >= this.ctx.canvas.width - this.w) {
      this.vx = 0
      this.x = this.ctx.canvas.width - this.w
    }
  }

  jump() {
    if (this.ay === 0) {
      this.vy = -13
      this.ay = 0.5
      this.y0Top = 0
      this.floor = this.y
    }
  }

  hasCollisionWith(item) {
    const colX = (this.x + this.w) >= item.x && (item.x + item.w) >= this.x
    const colY = (item.y + item.h) >= this.y && (this.y + this.h) >= item.y

    return colX && colY
  }

  hasHandCollisionWith(item) {
    const colX = (this.x + this.w) > item.x && (this.x + this.w) < (item.x + item.w)
    const colY = (this.y + this.h / 2) > item.y && (this.y + this.h / 2) < (item.y + item.h)

    return colX && colY
  }


}