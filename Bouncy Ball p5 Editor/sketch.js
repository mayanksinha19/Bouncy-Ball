var ball,ball_img,paddle,paddle_image;
//var invisible_down,rand=random(3,7),abc=random(5,10);
function preload() {
  paddle_image=loadImage("paddle.png");
  ball_image=loadImage("ball.png");
  
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball=createSprite(200,200,10,10);
  ball.addImage("bgnbfbvcnvb",ball_image);
  paddle=createSprite(360,200,10,60);
  paddle.addImage("jhvbnvmkbjdxcbbwvb b u",paddle_image);
  invisible_up=createSprite(200,1,400,5);
  invisible_up.visible=false;
  invisible_left=createSprite(1,200,5,400);
  invisible_left.visible=false;
  invisible_down=createSprite(200,399,400,5);
  invisible_down.visible=false;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  
  if(keyDown("space")){
    ball.velocityX=5;
    ball.velocityY=-5;
  }
  //ball.bounceOff(paddle);
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  //ball.bounceOff(edges[1]);
  ball.bounceOff(paddle);

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.y=paddle.y-10;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.y=paddle.y+10;
  }
  
  
  
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

