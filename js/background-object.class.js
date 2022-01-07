class BackgroundObject extends MovableObject {

  constructor(imagePath, x) {
    super(720).loadImage(imagePath);
    this.x = x;
    this.y = 0;
    this.height = 405;
  }
}