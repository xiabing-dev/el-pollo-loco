class CoinBar extends DrawableObject {

  x = 340;
  y = 10;

  constructor(width) {
    super(width).loadImage(MOVING_IMAGES.CoinBar[0]);
    this.loadImages(MOVING_IMAGES.CoinBar);
    this.height = 39.83;
  }

  updateCoinbar(coinAmount) {
    let imgIndex = this.resolveImageIndex(coinAmount);
    this.img = this.imagesCache[imgIndex];
  }

  resolveImageIndex(coinAmount) {
    if (coinAmount == 5) {
      return 5;
    } else if (coinAmount == 4) {
      return 4;
    } else if (coinAmount == 3) {
      return 3;
    } else if (coinAmount == 2) {
      return 2;
    } else if (coinAmount == 1) {
      return 1;
    } else if (coinAmount == 0) {
      return 0;
    }
  }

}