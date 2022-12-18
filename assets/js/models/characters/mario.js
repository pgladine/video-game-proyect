class Mario extends Drawable {
  constructor(ctx) {
    super(ctx, 50, FLOOR_BOTTOM, 40, 75, 0, 0, 0, 0.5)

    this.y0Bottom = FLOOR_BOTTOM
    this.y0Top = FLOOR_TOP

    this.floor = this.y

    this.img = new Image()
    this.img.src = 'https://s3-eu-west-1.amazonaws.com/cpm-assets/mario-sprite.png'
    this.img.frames = 3
    this.img.frameIndex = 0
    this.tick = 0

    this.graffiti1 = new Image()
    this.graffiti1.src = 'https://www.viaempresa.cat/uploads/s1/26/09/64/66/reproduccio-de-girl-with-a-balloon-de-banksy.jpeg'
    this.graffiti2 = new Image()
    this.graffiti2.src = 'https://static.posters.cz/image/750/poster/banksy-street-art-graffiti-throwing-flow-i119985.jpg'
    this.graffiti3 = new Image()
    this.graffiti3.src = 'https://cdn-media.italiani.it/site-verona/sites/64/2022/04/Banksy-01.jpg'
    this.graffitis = [this.graffiti1, this.graffiti2, this.graffiti3]

    this.bullets = []
  }

  draw() {
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
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

    // this.bullets.forEach(b => b.draw())
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

    if(this.ay && this.y >= this.floor) {
      this.y = this.floor
      this.vy = 0
      this.y0Top = FLOOR_TOP
      this.ay = 0
    }

    if (this.y >= this.y0Bottom) {
      this.vy = 0
      this.y = this.y0Bottom
    }

    if (this.y <= this.y0Top ) {
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

    this.bullets.forEach(b => b.move())    
  }

  jump() {
    if (this.ay === 0) {
      this.vy = -12
      this.ay = 0.5
      this.y0Top = 0
      this.floor = this.y
    }
  }

  chooseGraffiti() {
    const randomIndex = Math.floor(Math.random() * this.graffitis.length)
    return this.graffitis[randomIndex]
  }

  shoot() {
    const x = this.x + this.w
    const y = this.y + this.h / 2
    const bullet = new Bullet(this.ctx, x, y)
    this.bullets.push(bullet)
  }

}