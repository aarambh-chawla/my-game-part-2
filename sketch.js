var snake,food,w,h;
var rez = 20;

function setup(){
createCanvas(400,400) 
w = floor(width/20);
h = floor(height/20);

snake = new Snake();
}
function keyPressed(){
    if(keyCode === LEFT_ARROW){
        snake.setdir(-1,0)
    }
    if(keyCode === RIGHT_ARROW){
        snake.setdir(1,0)
    }
    if(keyCode === UP_ARROW){
        snake.setdir(0,-1)
    }
    if(keyCode === DOWN_ARROW){
        snake.setdir(0,1)
    }
}

function draw(){
scale (20);
background("black");
snake.update();
snake.display();
}