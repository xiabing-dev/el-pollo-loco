class Coin extends MovableObject {
  imagesCache;
  hitSound = new Audio("/audio/coins.wav");

  constructor(width) {
    super(width).loadImage(MOVING_IMAGES.Coin[0]);
    this.x = 300 + Math.random() * 1000;
    this.y = 200 + Math.random() * 70;
    this.imagesCache = this.loadImages(MOVING_IMAGES.Coin);
    this.animate(0, MOVING_IMAGES.Coin);
    this.height = 100.33;
  }

  hit() {
    this.isDisplay = false;
    this.hitSound.play();
  }
}