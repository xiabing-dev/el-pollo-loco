class DrawableObject {
  
  width;
  height;
  img;
  imagesCache = [];

  constructor(width) {
    this.width = width;
    
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
    //this.height = this.width * (this.img.height / this.img.width); //calculate heigh according width
  }

  loadImages(pathArr) {
    pathArr.forEach(path => {
      let img = new Image();
      img.src = path;
      img.style = 'transform: scaleX(-1)';
      this.imagesCache.push(img);
    });
  }

}