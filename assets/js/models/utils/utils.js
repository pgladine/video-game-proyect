const UP = 38
const RIGHT = 39
const DOWN = 40
const LEFT = 37
const SPACE = 32
const INTRO = 13

const FLOOR_BOTTOM = 245
const FLOOR_TOP = 190

// graffiti 0 constants
const graffiti0positions = [
	{ x: 220, y: 60, imgSrc: './assets/img/girl1.png' },
	{ x: 300, y: 60, imgSrc: './assets/img/girl2.png' },
	{ x: 220, y: 140, imgSrc: './assets/img/girl3.png' },
	{ x: 300, y: 140, imgSrc: './assets/img/girl4.png' },
]

// graffiti 1 constants
const graffiti1positions = [
	{ x: 220, y: 20, imgSrc: './assets/img/kid-1-1.png' },
	{ x: 300, y: 20, imgSrc: './assets/img/kid-1-2.png' },
	{ x: 220, y: 100, imgSrc: './assets/img/kid-2-1.png' },
	{ x: 300, y: 100, imgSrc: './assets/img/kid-2-2.png' },
	{ x: 220, y: 180, imgSrc: './assets/img/kid-3-1.png' },
	{ x: 300, y: 180, imgSrc: './assets/img/kid-3-2.png' },
]

// graffiti 2 constants
const graffiti2positions = [
	{ x: 180, y: 20, imgSrc: './assets/img/boy-flowers1.png' },
	{ x: 260, y: 20, imgSrc: './assets/img/boy-flowers2.png' },
	{ x: 340, y: 20, imgSrc: './assets/img/boy-flowers3.png' },
	{ x: 180, y: 100, imgSrc: './assets/img/boy-flowers4.png' },
	{ x: 260, y: 100, imgSrc: './assets/img/boy-flowers5.png' },
	{ x: 340, y: 100, imgSrc: './assets/img/boy-flowers6.png' },
	{ x: 180, y: 180, imgSrc: './assets/img/boy-flowers7.png' },
	{ x: 260, y: 180, imgSrc: './assets/img/boy-flowers8.png' },
	{ x: 340, y: 180, imgSrc: './assets/img/boy-flowers9.png' },
]

// graffiti 3 constants
const graffiti3positions = [
	{ x: 140, y: 20, imgSrc: './assets/img/dancing1.jpg' },
	{ x: 220, y: 20, imgSrc: './assets/img/dancing2.jpg' },
	{ x: 300, y: 20, imgSrc: './assets/img/dancing3.jpg' },
	{ x: 380, y: 20, imgSrc: './assets/img/dancing4.jpg' },
	{ x: 140, y: 100, imgSrc: './assets/img/dancing5.jpg' },
	{ x: 220, y: 100, imgSrc: './assets/img/dancing6.jpg' },
	{ x: 300, y: 100, imgSrc: './assets/img/dancing7.jpg' },
	{ x: 380, y: 100, imgSrc: './assets/img/dancing8.jpg' },
	{ x: 140, y: 180, imgSrc: './assets/img/dancing9.jpg' },
	{ x: 220, y: 180, imgSrc: './assets/img/dancing10.jpg' },
	{ x: 300, y: 180, imgSrc: './assets/img/dancing11.jpg' },
	{ x: 380, y: 180, imgSrc: './assets/img/dancing12.jpg' },
]

// graffiti 4 constants
const graffiti4positions = [
	{ x: 140, y: 20, imgSrc: './assets/img/bart1.jpg' },
	{ x: 220, y: 20, imgSrc: './assets/img/bart2.jpg' },
	{ x: 300, y: 20, imgSrc: './assets/img/bart3.jpg' },
	{ x: 380, y: 20, imgSrc: './assets/img/bart4.jpg' },
	{ x: 140, y: 100, imgSrc: './assets/img/bart5.jpg' },
	{ x: 220, y: 100, imgSrc: './assets/img/bart6.jpg' },
	{ x: 300, y: 100, imgSrc: './assets/img/bart7.jpg' },
	{ x: 380, y: 100, imgSrc: './assets/img/bart8.jpg' },
	{ x: 140, y: 180, imgSrc: './assets/img/bart9.jpg' },
	{ x: 220, y: 180, imgSrc: './assets/img/bart10.jpg' },
	{ x: 300, y: 180, imgSrc: './assets/img/bart11.jpg' },
	{ x: 380, y: 180, imgSrc: './assets/img/bart12.jpg' },
]
// graffiti 5 constants
const graffiti5positions = [
	{ x: 100, y: 20, imgSrc: './assets/img/pulp-banana1.png' },
	{ x: 180, y: 20, imgSrc: './assets/img/pulp-banana2.png' },
	{ x: 260, y: 20, imgSrc: './assets/img/pulp-banana3.png' },
	{ x: 340, y: 20, imgSrc: './assets/img/pulp-banana4.png' },
	{ x: 420, y: 20, imgSrc: './assets/img/pulp-banana5.png' },
	{ x: 100, y: 100, imgSrc: './assets/img/pulp-banana6.png' },
	{ x: 180, y: 100, imgSrc: './assets/img/pulp-banana7.png' },
	{ x: 260, y: 100, imgSrc: './assets/img/pulp-banana8.png' },
	{ x: 340, y: 100, imgSrc: './assets/img/pulp-banana9.png' },
	{ x: 420, y: 100, imgSrc: './assets/img/pulp-banana10.png' },
	{ x: 100, y: 180, imgSrc: './assets/img/pulp-banana11.png' },
	{ x: 180, y: 180, imgSrc: './assets/img/pulp-banana12.png' },
	{ x: 260, y: 180, imgSrc: './assets/img/pulp-banana13.png' },
	{ x: 340, y: 180, imgSrc: './assets/img/pulp-banana14.png' },
	{ x: 420, y: 180, imgSrc: './assets/img/pulp-banana15.png' },
]

// all graffitis array
const GRAFFITIS = [graffiti0positions, graffiti1positions, graffiti2positions, graffiti3positions, graffiti4positions, graffiti5positions]

// functions

function randomNum(maxNum) {
	return Math.floor(Math.random() * maxNum)
}
