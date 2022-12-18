class Bullet extends Drawable {
  constructor(ctx, x, y) {
    super(ctx, x, y, null, null, 10, 0, 0, 0.5)

    this.r = 5
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    this.ctx.fill()
    this.ctx.closePath()
  }

  move() {
    super.move()

    if (this.y > FLOOR_POSITION) {
      this.vy *= -1
    }
  }
}