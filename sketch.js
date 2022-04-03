var soldier1Img,soldier2Img,bgImg,aimImg,bulletImg,bulletsImg,speedImg, healthImg,soldier1ShootingImg, soldier2ShootingImg,soldier1DyingImg,soldier2DyingImg 
var soldier1,soldier2,bg,aim,bullet,bullets,speed, health 

function preload(){

  soldier1Img = loadImage("./assets/Soldier1/S6.png")
  soldier2Img = loadImage("./assets/Soldier2/S1png")
  
  soldier1ShootingImg = loadAnimation("./assets/Soldier1/S1.png","./assets/Soldier1/S2.png","./assets/Soldier1/S3.png","./assets/Soldier1/S4.png","./assets/Soldier1/S5.png")
  soldier2ShootingImg = loadAnimation("./assets/Soldier2/S2.png","./assets/Soldier2/S3.png","./assets/Soldier2/S4.png","./assets/Soldier2/S5.png")
  
  soldier1DyingImg = loadAnimation("./assets/Soldier1/S7.png","./assets/Soldier1/S8.png","./assets/Soldier1/S9.png","./assets/Soldier1/S10.png")
  soldier2DyingImg = loadAnimation("./assets/Soldier2/S5.png","./assets/Soldier2/S6.png","./assets/Soldier2/S7.png")

  bgImg = loadImage("./assets/BgImg.png")
  aimImg = loadImage("./assets/aim.png")
  bulletImg = loadImage("./assets/bullet.png")
  bulletsImg = loadImage("./assets/Bullets.png")
  speedImg = loadImage("./assets/Speed.png")
  healthImg = loadImage("./assets/Health.png")

}


function setup() {
  createCanvas(windowWidth,windowHeight)

  soldier1 = createSprite(150,200,30,30)
}

function draw() {
  background(220);
}