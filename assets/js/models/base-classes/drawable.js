class Drawable {
  constructor(ctx, x, y, w, h, vx, vy, ax, ay) {
    this.ctx = ctx

    this.x = x
    this.y = y
    this.w = w
    this.h = h

    this.vx = vx
    this.vy = vy
    this.ax = ax
    this.ay = ay
  }

  move() {
    this.vx += this.ax
    this.vy += this.ay
    this.x += this.vx
    this.y += this.vy
  }
}