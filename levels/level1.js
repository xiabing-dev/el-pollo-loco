const level1 = new Level(
  [
    new Chicken(50),
    new Chicken(50),
    new Chicken(50),
    new Chicken(50),
    new Chicken(50),
    new Endboss(200)
  ],
  [
    new Cloud(450),
    new Cloud(250),
    new Cloud(350)
  ],
  [
    new BackgroundObject('/img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
    new BackgroundObject('/img/5.Fondo/Capas/3.Fondo3/2.png', -719),
    new BackgroundObject('/img/5.Fondo/Capas/2.Fondo2/2.png', -719),
    new BackgroundObject('/img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

    new BackgroundObject('/img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
    new BackgroundObject('/img/5.Fondo/Capas/3.Fondo3/1.png', 0),
    new BackgroundObject('/img/5.Fondo/Capas/2.Fondo2/1.png', 0),
    new BackgroundObject('/img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),

    new BackgroundObject('/img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
    new BackgroundObject('/img/5.Fondo/Capas/3.Fondo3/2.png', 719),
    new BackgroundObject('/img/5.Fondo/Capas/2.Fondo2/2.png', 719),
    new BackgroundObject('/img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

    new BackgroundObject('/img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*2),
    new BackgroundObject('/img/5.Fondo/Capas/3.Fondo3/1.png', 719*2),
    new BackgroundObject('/img/5.Fondo/Capas/2.Fondo2/1.png', 719*2),
    new BackgroundObject('/img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719*2),

    new BackgroundObject('/img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*3),
    new BackgroundObject('/img/5.Fondo/Capas/3.Fondo3/2.png', 719*3),
    new BackgroundObject('/img/5.Fondo/Capas/2.Fondo2/2.png', 719*3),
    new BackgroundObject('/img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719*3)
  ],
  [
    new Bottle(50),
    new Bottle(50),
    new Bottle(50),
    new Bottle(50),
    new Bottle(50),
    new Bottle(50),
    new Bottle(50),
    new Bottle(50),
    new Bottle(50)
  ],
  [
    new Coin(100),
    new Coin(100),
    new Coin(100),
    new Coin(100),
    new Coin(100)
  ]
);