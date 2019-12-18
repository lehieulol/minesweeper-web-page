let board = [], isOpen  = [], isFlag = [];
let mode = 'de', sizeX = 10, sizeY = 15, bom = 15, size;
let bg;
function preload(){
	bg = loadImage('pic/background.png');
}
function layer1(){
	image(bg,0,120,770,540);
}
function makeboard() {
	size = 540/sizeX;
	tt = 0;
	board = [], isOpen  = [], isFlag = [];
	for (let i = 0; i < sizeX; i++) {
		board.push([]);
		isOpen.push([]);
		isFlag.push([]);
		for (let j = 0; j < sizeY; j++) {
			board[i].push(0);
			isOpen[i].push(0);
			isFlag[i].push(0);
		}
	}
}

function setup() {
	createCanvas(1000, 660);
	de = createButton('Pupil');
	de.position(240,70);
	de.size(70,20);
	de.mouseClicked(function(){mode = 'de';sizeX = 10; sizeY = 15;bom = 15; makeboard()});
	vua = createButton('Amateus');
	vua.position(320,70);
	vua.size(70,20);
	vua.mouseClicked(function(){mode = 'vua';sizeX = 20; sizeY = 30;bom = 80; makeboard()});
	kho = createButton('Expert');
	kho.position(400,70);
	kho.size(70,20);
	kho.mouseClicked(function(){mode = 'kho';sizeX = 40; sizeY = 60;bom = 350; makeboard()});
	makeboard();
}

function draw() {
  background(255);
  layer1();
  layer2();
}