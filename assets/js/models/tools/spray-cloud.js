class SprayCloud extends Drawable {
    constructor(ctx, x, y) {
        super(ctx, x, y, 100, 100, 0, 0, 0, 0)

        this.sprayCloudImg = new Image()
        this.sprayCloudImg.src = './assets/img/grey-cloud.png'

        this.cloudAudio = new Audio("./assets/audios/spray-cloud.mp3")
    }

    draw() {
        this.ctx.drawImage(this.sprayCloudImg, this.x, this.y, this.w, this.h)

        this.cloudAudio.play()
        this.cloudAudio.volume = 0.1
        this.cloudAudio.currentTime = 2
    }
}