const UP = 38
const RIGHT = 39
const DOWN = 40
const LEFT = 37
const SPACE = 32
const INTRO = 13

const FLOOR_BOTTOM = 245
const FLOOR_TOP = 190

// Peach constants

const graffiti1 = new Image()
graffiti1.src = './assets/img/kid-1-1.png'
const graffiti2 = new Image()
graffiti2.src = './assets/img/kid-1-2.png'
const graffiti3 = new Image()
graffiti3.src = './assets/img/kid-2-1.png'
const graffiti4 = new Image()
graffiti4.src = './assets/img/kid-2-2.png'
const graffiti5 = new Image()
graffiti5.src = './assets/img/kid-3-1.png'
const graffiti6 = new Image()
graffiti6.src = './assets/img/kid-3-2.png'

// functions

function randomNum(maxNum) {
    return Math.floor(Math.random() * maxNum)
}
