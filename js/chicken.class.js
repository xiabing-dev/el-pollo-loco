class Chicken extends MovableObject{

  hurtImages;
  lastHurt;
  live = 1;
  hurting_sound = new Audio("/audio/chicken-hurt.mp3");

  constructor(width) {
  
    super(width).loadImage(MOVING_IMAGES.Chicken[0]);
    this.hurtImages = this.loadImages(MOVING_IMAGES.Chicken_Hurting);
    this.x = 900 + Math.random() * 800;
    this.y = 310;
    this.width = width;
    this.speed = 5 * Math.random();
    this.animate(-this.speed, MOVING_IMAGES.Chicken);
    this.hurtAnimate();
    this.height = 48.99;
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
    return timePassed < 0.3;
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
        this.isDisplay = false;
      }
    }, 50);
  }
}