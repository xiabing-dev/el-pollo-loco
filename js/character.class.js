class Character extends MovableObject {
  
  moveRightTimer;
  live = 100;
  speed = 10;
  speedY = 0;
  keydown = false;
  walking_sound = new Audio("/audio/walking.mp3");
  hurting_sound = new Audio("/audio/hurting.wav");
  walkImages = [];
  jumpImages = [];
  hurtImages = [];
  deadImages = [];
  baseY = 170;
  jumpSpeed = 35;
  upImageIndex = 3;
  topImageIndex = 4;
  downImageIndex = 5;
  isTop = false;
  isJumping = false;
  lastHurt = 0;
  haveBottles = 0;
  haveCoins = 0;
  
  constructor(width) {
    super(width).loadImage(MOVING_IMAGES.Character_Walking[0]);
    this.width = width;
    this.x = 200;
    this.y = this.baseY;
    this.walkImages = this.loadImages(MOVING_IMAGES.Character_Walking);
    this.jumpImages = this.loadImages(MOVING_IMAGES.Character_Jumping);
    this.hurtImages = this.loadImages(MOVING_IMAGES.Character_Hurting);
    this.deadImages = this.loadImages(MOVING_IMAGES.Character_Dead);
    this.walkAnimate();
    this.jumpAnimate();
    this.hurtAnimate();
    this.height = 196.72;
  }

  walkAnimate() {
    let i = 0;
    this.movingTimer = setInterval(() => {
      this.walking_sound.pause();
      if(this.keydown == true && this.isJumping != true) {
        if(i < this.walkImages.length) {
          this.img = this.walkImages[i];
          this.walking_sound.play();
          i++;
        } else {
          i = 0;
          this.img = this.walkImages[i];
        }
      }
    }, 50);
  }

  moveRight() {
    if(!this.otherDirection) {
      this.x += this.speed;
    }
    this.otherDirection = false;
    this.keydown = true;
  }

  moveLeft() {
    if(this.otherDirection) {
      this.x -= this.speed;
    }
    this.otherDirection = true;
    this.keydown = true;
  }

  jump() {
    this.isJumping = true;
  }

  jumpAnimate() {
    let i = 0;
    this.speedY = this.jumpSpeed;
    setInterval(() => {
      if (this.isJumping == true) {
        if (i < this.upImageIndex && this.isTop == false) {
          this.img = this.jumpImages[i];
          i++;
        } else if (i == this.upImageIndex && this.isTop == false && this.speedY > 0) {
          this.img = this.jumpImages[this.upImageIndex];
          this.y -= this.speedY;
          this.speedY -= this.acceleration;
          this.moveX();
        } else if (this.speedY == 0) {
          this.img = this.jumpImages[this.topImageIndex];
          this.y += this.speedY;
          this.speedY += this.acceleration;
          this.moveX();
          this.isTop = true;
        } else if (this.isTop == true && this.speedY > 0 && this.speedY < this.jumpSpeed) {
          this.img = this.jumpImages[this.downImageIndex];
          this.y += this.speedY;
          this.speedY += this.acceleration;
          this.moveX();
        } else if (this.isTop == true && this.speedY == this.jumpSpeed && i < this.jumpImages.length) {
          i = this.downImageIndex + 1;
          this.y = this.baseY;
          this.img = this.jumpImages[i];
          i++;
          this.isTop = false;
        } else {
          this.img = this.jumpImages[0];
          this.isJumping = false;
          i = 0;
        } 
      }
    }, 50);
    
  }

  moveX() {
    if (this.otherDirection == false && this.keydown == true) {
      this.x += this.speed; 
    } else if (this.otherDirection == true && this.keydown == true) {
      this.x -= this.speed; 
    }
  }

  hurt() {
    this.live -= 5;
    if (this.live <= 0) {
      this.live = 0;
    }
    this.lastHurt = new Date().getTime();
  }

  isHurt() {
    let timePassed = new Date().getTime() - this.lastHurt;
    timePassed = timePassed / 1000;
    return timePassed < 1;
  }

  hurtAnimate() {
    let i = 0;
    setInterval(() => {
      this.hurting_sound.pause();
      if(this.isHurt() == true) {
        if(i < this.hurtImages.length) {
          this.img = this.hurtImages[i];
          this.hurting_sound.play();
          i++;
        } else {
          i = 0;
          this.img = this.hurtImages[i];
        }
      } else if (this.live == 0){
        if(i < this.deadImages.length) {
          this.img = this.deadImages[i];
          i++;
        } 
      }
    }, 50);
  }

  throwBottle() {
    if (this.haveBottles > 0) {
      this.haveBottles -= 1;
    }
  }

  getBottle() {
    if (this.haveBottles < 5) {
      this.haveBottles += 1;
    }
  }

  getCoin() {
    if (this.haveCoins < 5) {
      this.haveCoins += 1;
    }
  }
}