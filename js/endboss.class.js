class Endboss extends MovableObject {

  hurtImages;
  deadImages;
  lastHurt;
  live = 3;
  hurting_sound = new Audio("/audio/chicken-hurt.mp3");

  constructor(width) {
    super(width).loadImage(MOVING_IMAGES.Endboss[0]);
    this.x = 1500;
    this.y = 140;
    this.width = width;
    this.speed = 0;
    this.animate(-this.speed, MOVING_IMAGES.Endboss);
    this.hurtImages = this.loadImages(MOVING_IMAGES.Endboss_Hurting);
    this.deadImages = this.loadImages(MOVING_IMAGES.Endboss_Dead);
    this.hurtAnimate();
  }

  hurt() {
    this.live -= 1;
    if (this.live < 0) {
      this.live = 0;
    }
    this.lastHurt = new Date().getTime();
  }

  isHurt() {
    let timePassed = new Date().getTime() - this.lastHurt;
    timePassed = timePassed / 1000;
    return timePassed < 0.5;
  }

  hurtAnimate() {
    let i = 0;
    setInterval(() => {
      this.hurting_sound.pause();
      if(this.isHurt() == true) {
        this.hurting_sound.play();
        if(i < this.hurtImages.length) {
          this.img = this.hurtImages[i];
          i++;
        } else {
          i = 0;
          this.img = this.hurtImages[i];
        }
      } else if (this.live == 0){
        if(i < this.hurtImages.length) {
          this.img = this.deadImages[i];
          i++;
        } else {
          this.isDisplay = false;
        }
      }
    }, 50);
  }
}