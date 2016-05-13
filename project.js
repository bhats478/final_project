//TALE OF THREE CITIES BY SANJANA BHATIA

var palm;
var globeimage;
var myglobe;
var state = 1;
var ellipseA = {x:400,y:200,s:50,f:50,hue:black};
var ellipseB = {x:600,y:200,s:50,f:50,hue:black};
var ellipseC = {x:800,y:200,s:50,f:50,hue:black};

function preload(){
	palm = loadImage("palm.png");
	globeimage = loadImage("globe.png");
}

function draw(){
	background("black");
	imageMode(CENTER);
	image(palm,650,525,375,475);
	myglobe.display();
	if(state == 2){
		drawOptions();
	}
	if(state == 3){
		HONGKONG();
	}
	if(state == 4){
		SINGAPORE();
	}
	if(state == 5){
		JAKARTA();
	}
}

function globe () {
	this.x = 650;
	this.y = 325;
	this.display = function (){
		imageMode(CENTER);
		image(globeimage, this.x ,this.y ,100,100);
	}
	this.isClicked = function (){
		var d = dist(mouseX,mouseY,this.x,this.y);
		if(d < 50){
			this.y = 520;
			state = 2
		}
	}
}


function HONGKONG(){

	this.fill("red");
	this.stroke("red");
	this.textFont("Gotham");
	this.text("here i felt lonely. the place, the people, all seemed to pass me by",400,180);
	this.fill("black");
	this.stroke("black");
	this.ellipse(circleA, 100, 50,50);
	this.ellipse(circleB, 150, 50,50);
	this.ellipse(circleC, 200, 50,50);
	this.ellipse(circleD, 250, 50,50);
	this.display = function (){
		circleA = circleX + 1;
	if (circleA >= windowWidth){
		circleA = 0
	}}
	this.display = function (){
		circleC = circleX + 1;
	if (circleC >= windowWidth){
		circleC = 0
	}
	}
	this.display = function (){
		circleB = circleX - 1;
	if (circleB >= 0){
		circleB = windowWidth
	}
	}
	this.display = function (){
		circleD = circleX - 1;
	if (circleD >= 0){
		circleD = windowWidth
	}
	}
}

function SINGAPORE(){

	this.fill("white");
	this.stroke("white");
	this.ellipse(mouseX, mouseY, 80,80);
	this.fill("white");
	this.stroke("black");
	this.ellipse(mouseX, mouseY, 50,50);
	this.fill("blue");
	this.stroke("blue");
	this.textFont("Gotham");
	this.text("here i am just me. I am always growing, present, aware",600,180);
}

function JAKARTA(){

	this.fill("green");
	this.stroke("green");
	this.textFont("Gotham");
	this.text("here I was a product of what everyone was around me.",800,180);
	fill(ellipseA.hue);
	stroke(ellipseA.hue);
	ellipse(ellipseA.x,ellipseA.y,ellipseA.s,ellipseA.f);
	ellipseA.x = ellipseA.x + random(-1,1);
	ellipseA.y = ellipseA.y + random(-1,1);

	ellipse(ellipseB.x,ellipseB.y,ellipseB.s,ellipseB.f);
	ellipseB.x = ellipseB.x + random(-1,1);
	ellipseB.y = ellipseB.y + random(-1,1);

	ellipse(ellipseC.x,ellipseC.y,ellipseC.s,ellipseC.f);
	ellipseC.x = ellipseC.x + random(-1,1);
	ellipseC.y = ellipseC.y + random(-1,1);
}



function mousePressed(){
	myglobe.isClicked();
	if (mouseY>350 && mouseY<400){
		if (mouseX>375 && mouseX<500){
			state = 3;
		}
		if (mouseX>575 && mouseX<700){
			state = 4;
		}
		if (mouseX>775 && mouseX<900){
			state = 5;
		}
	}
}

function drawOptions(){
	fill("white");
	stroke("white");
	rect(375,350,125,50);
	rect(575,350,125,50);
	rect(775,350,125,50);

	fill("black");
	stroke("black");
	textFont("Gotham");
	text("HONG KONG",400,380);
	text("SINGAPORE",600,380);
	text("JAKARTA",810,380);

}


function setup(){
	createCanvas(windowWidth,windowHeight);
	myglobe = new globe();

}
