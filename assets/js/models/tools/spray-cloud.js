class SprayCloud extends Drawable {
    constructor(ctx, x, y) {
        super(ctx, x, y, 100, 100, 0, 0, 0, 0)

        this.sprayCloudImg = new Image()
        this.sprayCloudImg.src = './assets/img/grey-cloud.png'
        // this.sprayCloudImg.frames = 3
        // this.sprayCloudImg.frameIndex = 0
        // this.tick = 0
        this.cloudAudio = new Audio("./assets/audios/spray-cloud.mp3")
    }


    draw() {
        this.ctx.drawImage(this.sprayCloudImg, this.x, this.y, this.w, this.h)
        this.cloudAudio.play()
        this.cloudAudio.currentTime = 2
        // this.ctx.drawImage(
        //     this.img,
        //     this.img.frameIndex * this.img.width / this.img.frames,
        //     0,
        //     this.img.width / this.img.frames,
        //     this.img.height,
        //     this.x,
        //     this.y,
        //     this.w,
        //     this.h
        //   )
    }
}