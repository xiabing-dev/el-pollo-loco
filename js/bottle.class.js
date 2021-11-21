class Bottle extends MovableObject {

  imagesCache;
  hitSound = new Audio("/audio/bottles.wav");
  constructor(width) {
    super(width).loadImage(MOVING_IMAGES.Bottle[0]);
    this.x = 300 + Math.random() * 1500;
    this.y = 310;
    this.imagesCache = this.loadImages(MOVING_IMAGES.Bottle);
    this.animate(0, MOVING_IMAGES.Bottle);
  }

  hit() {
    this.isDisplay = false;
    this.hitSound.play();
  }
}
