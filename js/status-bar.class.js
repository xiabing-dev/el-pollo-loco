class StatusBar extends DrawableObject {

  x = 20;
  y = 10;

  constructor(width) {
    super(width).loadImage(MOVING_IMAGES.StatusBar[5]);
    this.loadImages(MOVING_IMAGES.StatusBar);
  }

  updateStatusBar(livePoint) {
    let imgIndex = this.resolveImageIndex(livePoint);
    this.img = this.imagesCache[imgIndex];
  }

  resolveImageIndex(livePoint) {
    if (livePoint == 100) {
      return 5;
    } else if (livePoint > 80) {
      return 4;
    } else if (livePoint > 60) {
      return 3;
    } else if (livePoint > 40) {
      return 2;
    } else if (livePoint > 20) {
      return 1;
    } else if (livePoint >= 0) {
      return 0;
    }
  }

}