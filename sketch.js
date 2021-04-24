var bg, fighter, fighter2, fighterImg, fighter2Img;
var fighterJump, fighterKick, fighterBlock, fighterWalk;

function preload(){
  fighterImg = loadImage("Images/Fighter stance 1.png")
  bg = loadImage("Images/Background.jpeg")
  
}

function setup(){
  createCanvas(1800,900);
  fighter = createSprite(700,600,150,20);
  fighter.addImage(fighterImg);
  fighter.scale = 1.8;


}

function draw(){
  background(bg);

  drawSprites();
}