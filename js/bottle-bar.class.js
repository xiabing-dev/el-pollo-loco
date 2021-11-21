class BottleBar extends DrawableObject {

  x = 180;
  y = 10;

  constructor(width) {
    super(width).loadImage(MOVING_IMAGES.BottleBar[0]);
    this.loadImages(MOVING_IMAGES.BottleBar);
  }

  updateBottleBar(bottleAmount) {
    let imgIndex = this.resolveImageIndex(bottleAmount);
    this.img = this.imagesCache[imgIndex];
  }

  resolveImageIndex(bottleAmount) {
    if (bottleAmount == 5) {
      return 5;
    } else if (bottleAmount == 4) {
      return 4;
    } else if (bottleAmount == 3) {
      return 3;
    } else if (bottleAmount == 2) {
      return 2;
    } else if (bottleAmount == 1) {
      return 1;
    } else if (bottleAmount == 0) {
      return 0;
    }
  }

}