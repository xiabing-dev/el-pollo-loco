class MovableObject {
  x = 120;
  y = 200;
  img;
  width;
  height;
  speed;
  movingTimer;
  otherDirection = false;
  speedY = 0;
  acceleration = 5;
  isDisplay = true;

  constructor(width) {
    this.width = width;
  }

  applyGravity(baseLine) {
    setInterval(() => {
      if (this.y < baseLine) {
        this.y += this.speedY;
        this.speedY += this.acceleration;
      }
    }, 40);
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
    this.height = this.width * (this.img.height / this.img.width); //calculate heigh according width
  }

  loadImages(pathArr) {
    let imagesCache = [];
    pathArr.forEach(path => {
      let img = new Image();
      img.src = path;
      //img.style = 'transform: scaleX(-1)';
      imagesCache.push(img);
    });
    return imagesCache;
  }

  animate(speed, images) {
    let i = 0;
    this.movingTimer = setInterval(() => {
      this.x = this.x + speed;
      if(i < images.length) {
        this.loadImage(images[i]);
        i++;
      } else {
        i = 0;
      }
    }, 100);
  }

  isColliding(mo) {
    return this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height;
  }

}