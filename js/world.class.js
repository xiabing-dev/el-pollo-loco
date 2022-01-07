class World {
  gameStart = new GameStart(720);
  character = new Character(100);
  starusBar = new StatusBar(150);
  bottleBar = new BottleBar(150);
  coinBar = new CoinBar(150);
  gameOver = new GameOver(720);
  throwableBottles = [];
  level;
  ctx;
  canvas;
  camera_x;
  startGame = false;

  constructor(canvas) {
    this.canvas = canvas;
    //this.ctx = canvas.getContext('2d');
    this.detectMovement();
    this.checkCollisions();
    this.draw();
  }

  draw() {
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.translate(this.camera_x, 0);

    if (this.startGame == true) {
      this.addObjectsToCanvas(this.level.backgroundObjects);
      if(this.character.otherDirection == true) {
        this.dealWithOtherDirection(this.character);
        if (this.throwableBottles != '') {
          for (let i=0; i < this.throwableBottles.length; i++) {
            this.dealWithOtherDirection(this.throwableBottles[0]);
          }
        }
      } else {
        this.addToCanvas(this.character);
        if (this.throwableBottles != '') {
          this.addMovableObjectsToCanvas(this.throwableBottles);
        }
      }
      
      this.addObjectsToCanvas(this.level.clouds);
      ctx.translate(-this.camera_x, 0);
      this.addToCanvas(this.starusBar);
      this.addToCanvas(this.bottleBar);
      this.addToCanvas(this.coinBar);
      ctx.translate(this.camera_x, 0);
      this.addObjectsToCanvas(this.level.enemies.filter( enemy => enemy.isDisplay == true));
      this.addObjectsToCanvas(this.level.bottles.filter( bottle => bottle.isDisplay == true));
      this.addObjectsToCanvas(this.level.coins.filter( coin => coin.isDisplay == true));
      ctx.translate(-this.camera_x, 0);
      if (this.character.live == 0) {
        this.addToCanvas(this.gameOver);
      }
    } else {
      this.addToCanvas(this.gameStart);
    }

    let self = this;
    requestAnimationFrame(() => {
      self.draw();
    });
  }

  dealWithOtherDirection(object) {
    ctx.save();
    ctx.translate(object.width, 0);
    ctx.scale(-1, 1);
    object.x = -object.x;
    this.addToCanvas(object);
    object.x = -object.x;
    ctx.restore();
  }

  addToCanvas(object) {
    //console.log(object);
    ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
  }

  addObjectsToCanvas(objects) {
    objects.forEach((object) => {
      this.addToCanvas(object);
    });
  }

  addMovableObjectsToCanvas(objects) {
    objects.forEach((object) => {
      if (object.isAlive) {
        this.addToCanvas(object);
      }
    });
  }
  
  detectMovement() {
    document.addEventListener('keydown', (e) => {
      if (e.code == "KeyS") {
        this.level = level1;
        this.startGame = true;
      }
      if (this.character.live > 0) {
        if(e.code == "ArrowRight" && this.character.x < this.level.level_end_x) {
          this.character.moveRight();
          this.camera_x = -this.character.x + 200;
        }
        if(e.code == "ArrowLeft" && this.character.x > 0) {
          this.character.moveLeft();
          this.camera_x = -this.character.x + 200;
        }
        if(e.code == "Space") {
          this.character.jump();
        }
        if(e.code == "KeyF") {
          if (this.character.haveBottles > 0) {
            if (this.character.otherDirection == true) {
              this.throwableBottles.push(new ThrowableBottle(this.character.x + this.character.width / 2, this.character.y + 80, this.character.otherDirection));
            } else {
              this.throwableBottles.push(new ThrowableBottle(this.character.x + this.character.width / 2, this.character.y + 80, this.character.otherDirection));
            }           
            this.character.throwBottle();
          }
          this.bottleBar.updateBottleBar(this.character.haveBottles);
        }
      }

    });
    document.addEventListener('keyup', () => {
      this.character.keydown = false;
    });
  }

  checkCollisions() {
    setInterval(() => {
      if (this.startGame == true) {
        if (this.character.live == 0) {
        } else {
          this.level.enemies = this.level.enemies.filter(enemy => enemy.isDisplay == true);
          this.level.enemies.forEach( (enemy) => {
            if (this.character.isColliding(enemy)) {
              this.character.hurt();
              this.starusBar.updateStatusBar(this.character.live);
            }
            if (this.throwableBottles != '') {
              this.throwableBottles = this.throwableBottles.filter(bottle => bottle.isAlive == true);
              this.throwableBottles.forEach( (bottle) => {
                if (bottle.isColliding(enemy)) {
                  if (bottle.isBroken != true) {
                    bottle.isBroken = true;
                    enemy.hurt();
                  }
                }
              });
            }
          });
    
          this.level.bottles = this.level.bottles.filter(bottle => bottle.isDisplay == true);
          this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
              this.character.getBottle();
              this.bottleBar.updateBottleBar(this.character.haveBottles);
              bottle.hit();
            }
          })
    
          this.level.coins = this.level.coins.filter(coins => coins.isDisplay == true);
          this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
              this.character.getCoin();
              this.coinBar.updateCoinbar(this.character.haveCoins);
              coin.hit();
            }
          })  
        }  
      }
 
    }, 50);
  }

}