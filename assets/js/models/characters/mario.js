class Mario {
	constructor(ctx) {
		this.marioContext = ctx

		this.x = 50
		this.y = 0
		this.y0 = 260
		this.w = 40
		this.h = 75
		this.vx = 0
		this.vy = 0
		this.ax = 0
		this.ay = 0.5

		this.img = new Image()
    this.img.src = 'https://s3-eu-west-1.amazonaws.com/cpm-assets/mario-sprite.png'
		this.img.frames = 3
		this.img.frameIndex = 0
		this.tick = 0

    this.bullets = []
	}

	shoot() {
		const x = this.x + this.w
    const y = this.y + this.h / 2
    const bullet = new Bullet(this.marioContext, x, y)
    this.bullets.push(bullet)
	}

	draw() {
		// drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
		this.marioContext.drawImage(
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

		this.bullets.forEach(b => b.draw())

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
		this.vx += this.ax
		this.vy += this.ay
		this.x += this.vx
		this.y += this.vy

		if (this.y >= this.y0) {
			this.y = this.y0
			this.vy = 0
		}

		if (this.x <= 0) {
			this.vx = 0
			this.x = 0
		}		

		if (this.x >= this.marioContext.canvas.width - this.w) {
			this.vx = 0
			this.x = this.marioContext.canvas.width - this.w
		}

    this.bullets.forEach(b => b.move())
	}

	jump() {
		if (this.y === this.y0) {
			this.vy = -10
		}
	}

	onKeyDown(key) {
		switch(key) {
			case RIGHT:
				this.vx = 5
				break;
			case LEFT:
				this.vx = -5
				break;
			case UP:
				this.jump()
				break;
      case SPACE:
        this.shoot()
        break;
		}
	}

	onKeyUp (key) {
		switch(key) {
			case RIGHT:
			case LEFT:	
				this.vx = 0
				break;
		}
	}

}