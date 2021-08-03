function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(50);

	let s = second();
	let m = minute() + s / 60;
	let h = hour() % 12 + m / 60;

	translate(width/2, height/2);

	//Seconde wijzer
	push();
	rotate(TWO_PI / 60 * s);
	stroke(255, 0, 0);
	strokeWeight(2);
	line(0, 0, 0, -150);
	pop();

	//Minuut wijzer
	push();
	rotate(TWO_PI / 60 * m);
	stroke(255);
	strokeWeight(4);
	line(0, 0, 0, -180);
	pop();

	//Uur wijzer
	push();
	rotate(TWO_PI / 12 * h);
	stroke(255);
	strokeWeight(4);
	line(0, 0, 0, -100);
	pop();

	//Nummers
	const r = 210;
	fill(255);
	textAlign(CENTER);
	strokeWeight(1);
	text('1', cos(1/3*PI) * r, -sin(1/3*PI) * r);
	text('2', cos(PI - 5/6*PI) * r, -sin(5/6*PI) * r);
	text('3', r, 0);
	text('4', cos(PI - 5/6*PI) * r, sin(5/6*PI) * r);
	text('5', cos(1/3*PI) * r, sin(1/3*PI) * r);
	text('6', 0, r);
	text('7', cos(PI - 1/3*PI) * r, sin(1/3*PI) * r);
	text('8', cos(5/6*PI) * r, sin(5/6*PI) * r);
	text('9', -r, 0);
	text('10', cos(5/6*PI) * r, -sin(5/6*PI) * r);
	text('11', cos(PI  - 1/3*PI) * r, -sin(1/3*PI) * r);
	text('12', 0, -r);

	//Center point
	stroke(255);
	strokeWeight(10);
	point(0, 0);
}