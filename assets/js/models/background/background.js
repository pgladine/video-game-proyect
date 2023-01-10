class Background extends Drawable {
  constructor(ctx) {
    super(ctx, 0, 0, ctx.canvas.width, ctx.canvas.height, 0, 0, 0, 0)
    
    this.img = new Image()
    this.img.src = './assets/img/fondo_ladrillos.jpg' // relative path from the index.html
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }

}


