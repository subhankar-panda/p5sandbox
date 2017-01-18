var x, y;
var once = true;

function setup(){
	createCanvas(600, 600);
}

function draw() {

	//super hacky way of initialising variables
	if(once){
		x = width/2;
		y = height/2;
		once = false;
	}

    background(225);
    fill(color(128, 128, 128));

    //keyboard handling
    if(keyIsDown(RIGHT_ARROW)){
		x += 5;
	}
	else if(keyIsDown(LEFT_ARROW)){
		x -= 5;
	}
	else if(keyIsDown(UP_ARROW)){
		y -= 5;
	}
	else if(keyIsDown(DOWN_ARROW)){
		y += 5;
	}

	if(x + 25 > width){
		x = 25;
	}

	if(y + 25 > height){
		y = 25;
	}

	if(x - 25 < 0){
		x = width - 25;
	}

	if(y - 25 < 0){
		y = width - 25;
	}
	console.log("width : " + width + "x : " + x);

    rect(x - 25, y - 25, 50, 50);
}
