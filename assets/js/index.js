const canvas = document.getElementById("game");
const context = canvas.getContext("2d");


const game = new Game(context)
game.start()

