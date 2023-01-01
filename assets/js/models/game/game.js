class Game {
  constructor(ctx) {
    this.ctx = ctx

    this.interval = null
    this.bg = new Background(ctx)
    this.mario = new Mario(ctx)
    this.polices = []
    this.graffitiFrames = []
    this.wasteBin = new WasteBin(ctx, 500, 200)
    this.tick = 100
    this.sprayCans = []
    this.paintedParts = 0
  }

  start() {
    this.stop()
    this.initListeners()

    this.addGraffitiFrame()

    this.interval = setInterval(() => {
      this.clear()
      this.draw()
      this.move()
      this.checkCollisions()
      this.addPolice()
      this.addSpray()
    }, 1000 / 60)
  }

  stop() {
    clearInterval(this.interval)

  }

  initListeners() {
    document.onkeydown = (event) => {
      this.handleKeyDown(event.keyCode)
    }

    document.onkeyup = (event) => {
      this.handleKeyUp(event.keyCode)
    }
  }

  handleKeyDown(key) {
    switch (key) {
      case RIGHT:
        this.mario.vx = 5
        break;
      case LEFT:
        this.mario.vx = -5
        break;
      case UP:
        if (this.mario.ay === 0) {
          this.mario.vy = -5
        }
        break;
      case DOWN:
        if (this.mario.ay === 0) {
          this.mario.vy = 5
        }
        break;
      case SPACE:
        this.mario.jump()
        break;
      case INTRO:
        this.paintGraffiti()
        break;
    }
  }

  handleKeyUp(key) {
    switch (key) {
      case RIGHT:
      case LEFT:
        this.mario.vx = 0
        break;
      case UP:
      case DOWN:
        if (this.mario.ay === 0) {
          this.mario.vy = 0
        }
        break;
    }
  }

  draw() {
    this.bg.draw()
    this.graffitiFrames.forEach(g => g.draw())
    this.polices.forEach(t => t.draw())
    this.mario.draw()
    this.sprayCans.forEach(s => s.draw())
    this.mario.bullets.forEach(b => b.draw())
    this.wasteBin.draw()


    // document.querySelector("#mario").innerText = `
    // y: ${this.mario.y} 
    // vy: ${this.mario.vy}
    // ay: ${this.mario.ay}
    // floor ${this.mario.floor}
    // `
  }

  move() {
    // this.bg.move()
    this.mario.move()
    this.sprayCans.forEach(s => s.move())
    this.polices.forEach(t => t.move())
  }

  clear() {
    this.ctx.clearRect(
      0,
      0,
      this.ctx.canvas.width,
      this.ctx.canvas.height
    )

    this.polices = this.polices.filter(t => t.isVisible())

    this.sprayCans = this.sprayCans.filter(s => s.isVisible())
  }

  paintGraffiti() {
    this.graffitiFrames.forEach(graffitiFrame => {
      if (this.mario.hasHandCollisionWith(graffitiFrame) && this.mario.spraysToUse > 0 && graffitiFrame.img === null) {
        graffitiFrame.setImage()
        this.mario.spraysToUse--
        this.paintedParts++
        this.updateSprays()
      }
    })
    if (this.paintedParts === 6) {
      this.youWin()
    }
  }

  addGraffitiFrame() {
    const positions = [
      { x: 220, y: 20 },
      { x: 300, y: 20 },
      { x: 220, y: 100 },
      { x: 300, y: 100 },
      { x: 220, y: 180 },
      { x: 300, y: 180 },
    ]

    this.graffitiFrames = positions.map(position => new GraffitiFrame(this.ctx, position.x, position.y))
  }

  addPolice() {
    this.tick--

    if (this.tick <= 0) {
      this.polices.push(new Police(this.ctx))
      this.tick = 600 + randomNum(40)
    }
  }

  addSpray() {
    this.tick--

    if (this.tick <= 0) {
      this.sprayCans.push(new SprayCan(this.ctx, randomNum(this.ctx.canvas.width)))
      this.tick = 25 + randomNum(100)
    }
  }

  checkCollisions() {
    this.polices.forEach(t => {
      if (this.mario.hasCollisionWith(t)) {
        this.gameOver()
      }
    })

    this.sprayCans.forEach(s => {
      if (this.mario.hasCollisionWith(s)) {
        s.y = this.ctx.canvas.height
        this.mario.spraysToUse++
      }
      this.updateSprays()
    })
  }

  updateSprays() {
    const totalSprays = document.querySelector('.sprays');
    if (this.mario.spraysToUse < 10) {
      totalSprays.innerText = `x0${this.mario.spraysToUse}`
    } else {
      totalSprays.innerText = `x${this.mario.spraysToUse}`
    }
  }

  gameOver() {
    setTimeout(() => {
      this.stop()
      alert('GAME OVER')
    }, 0)
  }

  youWin() {
    setTimeout(() => {
      this.stop()
      alert('YOU WIN')
    }, 19)
  }

}