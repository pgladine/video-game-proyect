class Game {
  constructor(ctx) {
    this.ctx = ctx

    this.interval = null
    this.bg = new Background(ctx)
    this.peach = new Peach(ctx)
    this.polices = []
    this.graffitiFrames = []
    this.sprayClouds = []
    this.wasteBin = new WasteBin(ctx, 500, 200)
    this.tick = 100
    this.sprayCans = []
    this.paintedParts = 0

    this.gameAudio = new Audio("./assets/audios/sara-socas.mp3")
    this.youWinAudio = new Audio("./assets/audios/fresh-prince.mp3")
    this.gameOverAudio = new Audio("./assets/audios/massive-attack.mp3")

  }

  beginInterval() {
    this.interval = setInterval(() => {
      this.clear()
      this.draw()
      this.move()
      this.checkCollisions()
      this.addThings()
    }, 1000 / 60)
  }

  start() {
    this.stop()
    this.initListeners()
    this.gameAudio.play()
    this.gameAudio.volume = 0.1
    this.gameAudio.currentTime = 13

    this.addGraffitiFrame()
    this.beginInterval()
  }

  stop() {
    clearInterval(this.interval)
  }

  handleKeyDown(key) {
    switch (key) {
      case RIGHT:
        this.peach.vx = 5
        break;
      case LEFT:
        this.peach.vx = -5
        break;
      case UP:
        if (this.peach.ay === 0) {
          this.peach.vy = -5
        }
        break;
      case DOWN:
        if (this.peach.ay === 0) {
          this.peach.vy = 5
        }
        break;
      case SPACE:
        this.peach.jump()
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
        this.peach.vx = 0
        break;
      case UP:
      case DOWN:
        if (this.peach.ay === 0) {
          this.peach.vy = 0
        }
        break;
    }
  }

  initListeners() {
    document.onkeydown = (event) => {
      this.handleKeyDown(event.keyCode)
    }

    document.onkeyup = (event) => {
      this.handleKeyUp(event.keyCode)
    }
  }

  draw() {
    this.bg.draw()
    this.graffitiFrames.forEach(g => g.draw())
    this.peach.draw()
    this.sprayClouds.forEach(c => c.draw())
    this.wasteBin.draw()
    this.polices.forEach(p => p.draw())
    this.sprayCans.forEach(s => s.draw())
  }

  move() {
    this.peach.move()
    this.sprayCans.forEach(s => s.move())
    this.polices.forEach(p => p.move())
  }

  clear() {
    this.ctx.clearRect(
      0,
      0,
      this.ctx.canvas.width,
      this.ctx.canvas.height
    )

    this.polices = this.polices.filter(p => p.isVisible())

    this.sprayCans = this.sprayCans.filter(s => s.isVisible())
  }

  addGraffitiFrame() {
    const positions = [
      { x: 220, y: 20, imgSrc: graffiti1Src },
      { x: 300, y: 20, imgSrc: graffiti2Src },
      { x: 220, y: 100, imgSrc: graffiti3Src },
      { x: 300, y: 100, imgSrc: graffiti4Src },
      { x: 220, y: 180, imgSrc: graffiti5Src },
      { x: 300, y: 180, imgSrc: graffiti6Src },
    ]

    this.graffitiFrames = positions.map(position => new GraffitiFrame(this.ctx, position.x, position.y, position.imgSrc))
  }

  paintGraffiti() {
    this.graffitiFrames.forEach(graffitiFrame => {
      if (this.peach.hasHandCollisionWith(graffitiFrame) && this.peach.spraysToUse > 0 && graffitiFrame.img === null) {
        this.sprayClouds.push(new SprayCloud(this.ctx, graffitiFrame.x - 10, graffitiFrame.y - 10))
        setTimeout(() => {
          this.sprayClouds.pop()
          graffitiFrame.setImage()
        }, 400)
        this.peach.spraysToUse--
        this.paintedParts++
        this.updateSprays()
      }
    })
    if (this.paintedParts === 6) {
      this.youWin()
    }
  }

  // TODO: REVISAR FRECUENCIA DE APARICIÓN DE SPRAYS Y POLIS
  addSpray() {
    this.sprayCans.push(new SprayCan(this.ctx, 10 + randomNum(this.ctx.canvas.width - 10)))
  }

  addPolice() {
    this.polices.push(new Police(this.ctx))
  }

  addThings() {
    this.tick--

    if (this.tick % 300 === 0) {
      this.addSpray()
    }

    if (this.tick <= 0) {
      this.addPolice()
      this.tick = 600 + randomNum(40)
    }
  }

  checkCollisions() {
    this.polices.forEach(p => {
      if (this.peach.hasCollisionWith(p) && this.peach.spraysToUse === 0) {
        this.gameOver()
      }
      if (this.peach.hasCollisionWith(p) && this.peach.spraysToUse > 0) {
        this.stop()
        p.yell()
        this.peach.spraysToUse = 0
        this.updateSprays()
        setTimeout(() => {
          p.x = p.x - 150
          this.beginInterval()
        }, 2000)
      }
    })

    this.sprayCans.forEach(s => {
      if (this.peach.hasCollisionWith(s)) {
        s.y = this.ctx.canvas.height
        this.peach.spraysToUse++
      }
      this.updateSprays()
    })
  }

  updateSprays() {
    const totalSprays = document.querySelector('.sprays');
    if (this.peach.spraysToUse < 10) {
      totalSprays.innerText = `0${this.peach.spraysToUse}`
    } else {
      totalSprays.innerText = `${this.peach.spraysToUse}`
    }
  }

  gameOver() {
    setTimeout(() => {
      this.stop()
      this.gameAudio.pause()
      this.gameOverAudio.play()
      this.gameOverAudio.currentTime = 7
      this.gameOverAudio.volume = 0.2
      showGameOverScreen()
    }, 0)
  }

  youWin() {
    setTimeout(() => {
      this.stop()
      this.gameAudio.pause()
      this.youWinAudio.play()
      this.youWinAudio.currentTime = 7
      this.youWinAudio.volume = 0.2
      showYouWinScreen()
    }, 700)
  }
}