class SpeechCloud extends Drawable {
    constructor(ctx, x, y) {
        super(ctx, x, y, 80, 60, 0, 0, 0, 0)

        this.speechCloudImg = new Image()
        this.speechCloudImg.src = './assets/img/speech-cloud-yell.png'
        // this.speechCloudImg.frames = 3
        // this.speechCloudImg.frameIndex = 0
        // this.tick = 0
    }


    draw() {
        this.ctx.drawImage(this.speechCloudImg, this.x, this.y, this.w, this.h)
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