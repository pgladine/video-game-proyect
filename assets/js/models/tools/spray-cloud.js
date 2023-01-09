class SprayCloud extends Drawable {
    constructor(ctx, x, y) {
        super(ctx, x, y, 100, 100, 0, 0, 0, 0)

        this.sprayCloudImg = new Image()
        this.sprayCloudImg.src = './assets/img/grey-cloud.png'
        // this.sprayCloudImg.src = './assets/img/spray-cloud.png'
        // this.sprayCloudImg.frames = 7
        // this.sprayCloudImg.frameIndex = 0
        // this.tick = 0

        this.cloudAudio = new Audio("./assets/audios/spray-cloud.mp3")
    }

    draw() {
        this.ctx.drawImage(this.sprayCloudImg, this.x, this.y, this.w, this.h)
        // this.ctx.drawImage(
        //     this.sprayCloudImg,
        //     this.sprayCloudImg.frameIndex * this.sprayCloudImg.width / this.sprayCloudImg.frames,
        //     0,
        //     this.sprayCloudImg.width / this.sprayCloudImg.frames,
        //     this.sprayCloudImg.height,
        //     this.x,
        //     this.y,
        //     this.w,
        //     this.h
        // )

        // this.animate()
        this.cloudAudio.play()
        this.cloudAudio.volume = 0.1
        this.cloudAudio.currentTime = 2
    }

// animate() {
//     if (this.tick++ > 30) {
//       this.tick = 0
//       this.sprayCloudImg.frameIndex++

//       if (this.sprayCloudImg.frameIndex > this.sprayCloudImg.frames - 1) {
//         this.sprayCloudImg.frameIndex = 0
//       }
//     }
//   }
}