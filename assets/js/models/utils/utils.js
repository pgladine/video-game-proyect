const UP = 38
const RIGHT = 39
const DOWN = 40
const LEFT = 37
const SPACE = 32
const INTRO = 13

const FLOOR_BOTTOM = 265
const FLOOR_TOP = 215

// Mario constants

const graffiti1 = new Image()
graffiti1.src = 'https://www.viaempresa.cat/uploads/s1/26/09/64/66/reproduccio-de-girl-with-a-balloon-de-banksy.jpeg'
const graffiti2 = new Image()
graffiti2.src = 'https://static.posters.cz/image/750/poster/banksy-street-art-graffiti-throwing-flow-i119985.jpg'
const graffiti3 = new Image()
graffiti3.src = 'https://cdn-media.italiani.it/site-verona/sites/64/2022/04/Banksy-01.jpg'

// functions

function randomNum(maxNum) {
    return Math.floor(Math.random() * maxNum)
}
