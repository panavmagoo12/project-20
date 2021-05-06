
function preload() {
    //load the images here
    catimg=loadAnimation("images/cat2.png","images/cat3.png");
    cat1img=loadImage("images/cat1.png");
    cat2img=loadImage("images/cat4.png");

    mouse1=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse2=loadImage("images/mouse1.png");
    mouse3=loadImage("images/mouse4.png");

    background1=loadImage("images/garden.png");
    
}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
tom=createSprite(650,600,20,20);
tom.addImage(cat1img);
tom.scale=0.15;

jerry=createSprite(100,600,20,20);
jerry.addImage(mouse2);
jerry.scale=0.15;
}

function draw() {

    background(background1);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0;
        tom.addImage("happy",cat2img);
        tom.changeImage("happy");
        tom.x=200;
        tom.y=600;

        jerry.addImage("happy1",mouse3);
        jerry.changeImage("happy1");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("catrunning",catimg);
    tom.changeAnimation("catrunning");

    jerry.addAnimation("jerryteasing",mouse1);
    jerry.changeAnimation("jerryteasing")
}

}
