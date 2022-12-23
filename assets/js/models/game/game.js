class Game {
  constructor(ctx) {
    this.ctx = ctx

    this.interval = null
    this.bg = new Background(ctx)
    this.mario = new Mario(ctx)
    this.turtles = []
    this.graffitiFrames = []
    this.wasteBin = new WasteBin(ctx, 500, 200)
    this.tick = 100
    this.sprayCans = []
  }

  start() {
    this.stop()
    this.initListeners()

    this.addGraffitiFrame()
    this.addGraffitiFrame()
    this.addGraffitiFrame()

    this.interval = setInterval(() => {
      this.clear()
      this.draw()
      this.checkCollisions()
      this.move()
      this.addTurtle()
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
        // this.mario.shoot()
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
    this.turtles.forEach(t => t.draw())
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
    this.turtles.forEach(t => t.move())
  }

  clear() {
    this.ctx.clearRect(
      0,
      0,
      this.ctx.canvas.width,
      this.ctx.canvas.height
    )

    this.turtles = this.turtles.filter(t => t.isVisible())

    this.sprayCans = this.sprayCans.filter(s => s.isVisible())
  }

  paintGraffiti() {
    this.graffitiFrames.forEach(graffitiFrame => {
      if (this.mario.hasCollisionWith(graffitiFrame) && this.mario.spraysToUse > 0) {
        graffitiFrame.setImage(this.mario.chooseGraffiti())
        this.mario.spraysToUse--
      } 
    })
  }

  addGraffitiFrame() {
    const xPositions = [30, 330]
    const yPositions = []
    this.graffitiFrames.push(new GraffitiFrame(this.ctx, xPositions[this.graffitiFrames.length], 20))
  }

  addTurtle() {
    this.tick--

    if (this.tick <= 0) {
      this.turtles.push(new Turtle(this.ctx))
      this.tick = 600 + randomNum(40)
    }
  }

  addSpray() {
    this.tick--

    if (this.tick <= 0) {
      this.sprayCans.push(new SprayCan(this.ctx, randomNum(this.ctx.canvas.width)))
      this.tick = 250 + randomNum(100)
    }
  }

  checkCollisions() {
    this.turtles.forEach(t => {
      if (this.mario.hasCollisionWith(t)) {
        this.gameOver()
      }
    })

    this.sprayCans.forEach(s => {
      if (this.mario.hasCollisionWith(s)) {
        s.y = this.ctx.canvas.height 
        this.mario.spraysToUse++
      }
    })
  }

  gameOver() {
    setTimeout(() => {
      this.stop()
      alert('GAME OVER')
    }, 0)
  }

}