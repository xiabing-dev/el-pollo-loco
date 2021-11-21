class ThrowableBottle extends MovableObject {

  groundX = 310;
  originalImages = [];
  brokenImages = [];
  speed = 50;
  throwTimer;
  isBroken = false;
  

  constructor(startX, startY, otherDirection) {
    super(50);
    this.x = startX;
    this.y = startY;
    this.isAlive = true;
    this.loadImage(MOVING_IMAGES.BottleOrginal[0]);
    this.height = 50;
    this.originalImages = this.loadImages(MOVING_IMAGES.BottleOrginal);
    this.brokenImages = this.loadImages(MOVING_IMAGES.BottleBroken);
    this.otherDirection = otherDirection;
    this.throw();
  }

  throw() {
    let i = 0;
    let j = 0;
    this.throwTimer = setInterval(() => {
      if (this.isBroken == false && this.isAlive == true) {
        if (this.otherDirection) {
          this.x -= this.speed;
        } else {
          this.x += this.speed;
        }
        this.y -= this.speedY;
        if(i < this.originalImages.length) {
          this.img = this.originalImages[i];
          i++;
        } else {
          i = 0;
          this.img = this.originalImages[i];
        }
        this.speedY -= this.acceleration;
      } else if (this.isBroken = true && this.isAlive == true) {
        if(j < this.originalImages.length) {
          this.img = this.brokenImages[j];
          j++;
        } else {
          this.isAlive = false;
        }
      }
      if (this.y >= this.groundX) {
        this.isBroken = true;
      }
    }, 50);
  }

  moveRight() {
    this.otherDirection = false;
  }

  moveLeft() {
    this.otherDirection = true;
  }

}