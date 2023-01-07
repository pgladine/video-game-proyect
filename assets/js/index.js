function startGame() {
    document.querySelector(".container > .home-screen").classList.add("hide-element")

    document.querySelector(".container > canvas").classList.remove("hide-element")
    document.querySelector(".container > .status-bar").classList.remove("hide-element")

    game.start()
}

function showYouWinScreen() {
    document.querySelector(".container > .you-win-screen").classList.remove("hide-element")
}

function showGameOverScreen() {
    document.querySelector(".container > .game-over-screen").classList.remove("hide-element")
}

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");


const game = new Game(ctx)

