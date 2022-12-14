class Game {
constructor(ctx) {
  this.gameContext = ctx

  this.interval = null  
  this.bg = new Background(ctx)
  this.mario = new Mario(ctx)
}

start() {
  this.initListeners() 
  
  this.interval = setInterval(() => {
    this.clear()
    this.draw()
    this.move()
  }, 1000/60) 
}

initListeners() {
  document.onkeydown = (e) => {
    this.mario.onKeyDown(e.keyCode)
    //this.bg.onKeyDown(e.keyCode)
  }
  
  document.onkeyup = (e) => {
    this.mario.onKeyUp(e.keyCode)
    //this.bg.onKeyUp(e.keyCode)
  }
}

stop() {
  clearInterval(this.interval)
      
}

draw() {
  this.bg.draw()
  this.mario.draw()
}

move() {
  this.bg.move()
  this.mario.move()
}

clear() {
  this.gameContext.clearRect(
    0,
    0,
    this.gameContext.canvas.width,
    this.gameContext.canvas.height
  )
}

}