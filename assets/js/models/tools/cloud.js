class Cloud extends Drawable {
    constructor(ctx, x, y) {
        super(ctx, x, y, 100, 100, 0, 0, 0, 0)

        this.cloudImg = new Image()
        this.cloudImg.src = './assets/img/spray-cloud.png'
    }


    draw() {
        this.ctx.drawImage(this.cloudImg, this.x, this.y, this.w, this.h)
    }
}