class Game {
  constructor(ctx) {
    this.ctx = ctx

    this.interval = null
    this.bg = new Background(ctx)
    this.mario = new Mario(ctx)
    window.mario = this.mario
    this.turtles = []
    this.graffitiFrames = []
    this.wasteBin = new WasteBin(ctx, 500, 200)
    this.tick = 10 * 5
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
      // this.addTurtle()
    }, 1000 / 20)
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
    this.mario.bullets.forEach(b => b.draw())
    this.wasteBin.draw()

    document.querySelector("#mario").innerText = `
    y: ${this.mario.y} 
    vy: ${this.mario.vy}
    ay: ${this.mario.ay}
    floor ${this.mario.floor}
    `
  }

  move() {
    // this.bg.move()
    this.mario.move()
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
  }

  paintGraffiti() {
    this.graffitiFrames.forEach(graffitiFrame => {
      if (this.checkGraffitiCollision(graffitiFrame)) {
        graffitiFrame.setImage(this.mario.chooseGraffiti())
      }
    })
  }

  addGraffitiFrame() {
    const xPositions = [150, 300, 450]
    this.graffitiFrames.push(new GraffitiFrame(this.ctx, xPositions[this.graffitiFrames.length], 80))
  }

  addTurtle() {
    this.tick--

    if (this.tick <= 0) {
      this.tick = 200 + Math.random() * 40
      this.turtles.push(new Turtle(this.ctx))
    }
  }

  checkCollisions() {
    const m = this.mario

    this.turtles.forEach(t => {
      const colX = (m.x + m.w) >= t.x && (t.x + t.w) >= m.x
      const colY = (t.y + t.h) >= m.y && (m.y + m.h) >= t.y

      if (colX && colY) {
        this.gameOver()
        // m.vx = 0
        // m.y = t.y - m.h
        // m.vy = 0
      }
    })
  }

  checkGraffitiCollision(graffitiFrame) {
    const mario = this.mario

    const colX = (mario.x + mario.w) >= graffitiFrame.x && (graffitiFrame.x + graffitiFrame.w) >= mario.x
    const colY = (graffitiFrame.y + graffitiFrame.h) >= mario.y && (mario.y + mario.h) >= graffitiFrame.y

    return colX && colY
  }

  gameOver() {
    setTimeout(() => {
      this.stop()
      alert('GAME OVER')
    }, 0)
  }

}