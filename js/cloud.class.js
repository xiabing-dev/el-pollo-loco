class Cloud extends MovableObject {

  constructor(width) {
    super(width).loadImage('/img/5.Fondo/Capas/4.nubes/1.png');
    this.x = 200 + Math.random() * 1500;
    this.y = 20 + Math.random() * 30;
    this.speed = 1 * Math.random();
    this.animate(-this.speed, MOVING_IMAGES.Cloud);
  }

}