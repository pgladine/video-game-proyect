class Background {
  constructor(ctx) {
    this.ctx = ctx

    this.w = this.ctx.canvas.width
    this.h = this.ctx.canvas.height
    this.x = 0
    this.y = 0
    this.vx = -1
    this.vy = 0

    this.img = new Image()
    this.img.src = 'https://www.vbforums.com/attachment.php?attachmentid=113103&d=1398112502'
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h)
  }

  move() {
    this.x += this.vx
    this.y += this.vy

    if (this.x <= -this.w) {
      this.x = 0
    }
  }

  // onKeyDown(key) {
	// 	if (key === 39) {
	// 		this.vx = -5
	// 	} else if (key === 37) {
	// 		this.vx = 5
	// 	} 
	// }

	// onKeyUp (key) {
	// 	if (key === 39 || key === 37) {
	// 		this.vx = 0
	// 	}
	// }

}