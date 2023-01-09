class SpeechCloud extends Drawable {
    constructor(ctx, x, y) {
        super(ctx, x, y, 80, 60, 0, 0, 0, 0)

        this.speechCloudImg = new Image()
        this.speechCloudImg.src = './assets/img/speech-cloud-yell.png'
    }


    draw() {
        this.ctx.drawImage(this.speechCloudImg, this.x, this.y, this.w, this.h)
    }
}