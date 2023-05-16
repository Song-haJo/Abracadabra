p5 . disableFriendlyErrors  =  true ;
let handpose;
let video;
let predictions = [];

var s;
var scl = 30;
var food;
var obstacle;
var obstacle1;
var obstacle2;
var obstacle3;
var playfieldW = 600;
var playfieldH = 640;
var check = 'start';
let scorepg;
var count=0;
var d1

let bgPic, crab, shark, burger, how, end;
let startbg;
let bgUrl = "https://cdn.pixabay.com/photo/2017/08/09/18/23/underwater-2615376_960_720.jpg";

function preload() {
  bgPic = loadImage(bgUrl);
  startbg = loadImage("startbg6.png");
  shark = loadImage("shark.png");
  crab = loadImage("crab.png");
  burger = loadImage("burger.png");
  how = loadImage("how.png");
  end = loadImage("gravestone.png")
}

function setup() {
  createCanvas(playfieldW, playfieldH);
  video = createCapture(VIDEO);
  video.position(600,-50);
  video.size(350,350);
  handpose = ml5.handpose(video);
  handpose.on("predict", gotResult);
  scorepg = createGraphics(600,40);
  s = new Snake();
  frameRate (8);
  foodLocatrion(); 
  ObstacleLocatrion();
  textFont("Helvetica");
}

function gotResult(results){
  predictions = results;
}

function draw() {
  if(check == 'start'){
    image(startbg, 0, 0,600,640);
    if(mouseX>350&&mouseX<570&&mouseY>246&&mouseY<295){
      if(mouseIsPressed){
        count=0;
        check = 'playing';
      }
    }
    if(mouseX>350&&mouseX<570&&mouseY>330&&mouseY<380){
      if(mouseIsPressed){
        count=0;
        check = 'How';
      }
    }
  }
  else if(check == 'End'){
    image(end,50,50,500,500);
    /*fill(0);
    rect(65,610,30,40);
    fill(255);
    text(count+1, 70,625);*/
    if(mouseX>143&&mouseX<298&&mouseY>452&&mouseY<484){
      if(mouseIsPressed){
        count=0;
        check = 'start';
      }
    }
    if(mouseX>315&&mouseX<469&&mouseY>452&&mouseY<484){
      if(mouseIsPressed){
        count=0;
        check = 'playing';
      }
    }
  }
  else if(check == 'playing'){
    drawKeypoints();
    image(bgPic, 0, 0,600,640);
    if (s.eatf(food)){ foodLocatrion(); }
    if (s.eato(obstacle)) { ObstacleLocatrion(); }
    s.death(); 
    s.update(); 
    s.show(); 
    image(burger, food.x, food.y, scl, scl);
    image(shark, obstacle.x, obstacle.y, scl, scl);
    scoreboard(); 
    if(count ==5)
      ObstacleLocatrion1();
    if(count >5){
    if (s.eato(obstacle1)) { ObstacleLocatrion1(); }
      image(shark, obstacle1.x, obstacle1.y, scl, scl);
    }
    if(count ==10)
      ObstacleLocatrion2();
    if(count >10){
    if (s.eato(obstacle2)) { ObstacleLocatrion2(); }
      image(shark, obstacle2.x, obstacle2.y, scl, scl);
    }
    if(count ==20)
      ObstacleLocatrion3();
    if(count >20){
    if (s.eato(obstacle3)) { ObstacleLocatrion3(); }
      image(shark, obstacle3.x, obstacle3.y, scl, scl);
    }
  }
  else if(check == 'How'){
    image(how, 0, 0,600,640);
    if(mouseX>313&&mouseX<480&&mouseY>398&&mouseY<442){
      if(mouseIsPressed){
        count=0;
        check = 'playing';
      }
    }
  }
}
function foodLocatrion() { 
  var cols = floor(playfieldW/scl); 
  var rows = floor(playfieldW/scl); 
  cols = floor(random(20))*scl;
  rows = floor(random(20))*scl;
  food = createVector(0, 0);
  food.add(cols,rows);
  for (var i = 0; i < s.tail.length; i++) { 
    var pos = s.tail[i];
    var d = dist(food.x, food.y, pos.x, pos.y);
    if (d < 1) {
      foodLocatrion();
    }
  }
  if(count>1){
  d1 = dist(obstacle.x, obstacle.y, food.x, food.y);
  if(d1<1){
    foodLocatrion();
  }}
  if(count>5){
  d1 = dist(obstacle1.x, obstacle1.y, food.x, food.y);
  if(d1<1){
    foodLocatrion();
  }
  }
  if(count>10){
  d1 = dist(obstacle2.x, obstacle2.y, food.x, food.y);
  if(d1<1){
    foodLocatrion();
  }
  }
  if(count>20){
  d1 = dist(obstacle3.x, obstacle3.y, food.x, food.y);
  if(d1<1){
    foodLocatrion();
  }
  }
}
function ObstacleLocatrion() {
  var cols = floor(playfieldW/scl); 
  var rows = floor(playfieldW/scl); 
  cols = floor(random(20))*scl;
  rows = floor(random(20))*scl;
  obstacle = createVector(0, 0);
  obstacle.add(cols,rows); 
  for (var i = 0; i < s.tail.length; i++) { 
    var pos = s.tail[i];
    var d = dist(obstacle.x, obstacle.y, pos.x, pos.y);
    if (d < 1) {
      ObstacleLocatrion();
    }
  }
  d1 = dist(obstacle.x, obstacle.y, food.x, food.y);
  if(d1<1){
    ObstacleLocatrion();
  }
}
function ObstacleLocatrion1() { 
  var cols = floor(playfieldW/scl); 
  var rows = floor(playfieldW/scl); 
  cols = floor(random(20))*scl;
  rows = floor(random(20))*scl;
  obstacle1 = createVector(0, 0);
  obstacle1.add(cols,rows); 
  for (var i = 0; i < s.tail.length; i++) { 
    var pos = s.tail[i];
    var d = dist(obstacle1.x, obstacle1.y, pos.x, pos.y);
    if (d < 1) {
      ObstacleLocatrion1();
    }
  }
  d1 = dist(obstacle1.x, obstacle1.y, food.x, food.y);
  if(d1<1){
    ObstacleLocatrion1();
  }
  d1 = dist(obstacle1.x, obstacle1.y, obstacle.x, obstacle.y);
  if(d1<1){
    ObstacleLocatrion1();
  }
}
function ObstacleLocatrion2() { 
  var cols = floor(playfieldW/scl); 
  var rows = floor(playfieldW/scl); 
  cols = floor(random(20))*scl;
  rows = floor(random(20))*scl;
  obstacle2 = createVector(0, 0);
  obstacle2.add(cols,rows); 
  for (var i = 0; i < s.tail.length; i++) { 
    var pos = s.tail[i];
    var d = dist(obstacle2.x, obstacle2.y, pos.x, pos.y);
    if (d < 1) {
      ObstacleLocatrion2();
    }
  }
  d1 = dist(obstacle2.x, obstacle2.y, food.x, food.y);
  if(d1<1){
    ObstacleLocatrion2();
  }
  d1 = dist(obstacle2.x, obstacle2.y, obstacle.x, obstacle.y);
  if(d1<1){
    ObstacleLocatrion2();
  }
  d1 = dist(obstacle2.x, obstacle2.y, obstacle1.x, obstacle1.y);
  if(d1<1){
    ObstacleLocatrion2();
  }
}
function ObstacleLocatrion3() { 
  var cols = floor(playfieldW/scl); 
  var rows = floor(playfieldW/scl); 
  cols = floor(random(20))*scl;
  rows = floor(random(20))*scl;
  obstacle3 = createVector(0,0);
  obstacle3.add(cols,rows); 
  for (var i = 0; i < s.tail.length; i++) { 
    var pos = s.tail[i];
    var d = dist(obstacle3.x, obstacle3.y, pos.x, pos.y);
    if (d < 1) {
      ObstacleLocatrion3();
    }
  }
  d1 = dist(obstacle3.x, obstacle3.y, food.x, food.y);
  if(d1<1){
    ObstacleLocatrion3();
  }
  d1 = dist(obstacle3.x, obstacle3.y, obstacle.x, obstacle.y);
  if(d1<1){
    ObstacleLocatrion3();
  }
  d1 = dist(obstacle3.x, obstacle3.y, obstacle1.x, obstacle1.y);
  if(d1<1){
    ObstacleLocatrion3();
  }
  d1 = dist(obstacle3.x, obstacle3.y, obstacle2.x, obstacle2.y);
  if(d1<1){
    ObstacleLocatrion3();
  }
}
function scoreboard() {  
  scorepg.background(0);
  image(scorepg,0,600);
  textSize(18);
  fill(255);
  text("Score: ", 10, 625);
  text("Highscore: ", 450, 625);
  //text(s.score, 70, 625);
  fill(0);
  rect(65,610,30,40);
  fill(255);
  text(count+1, 70,625);
  text(s.highscore, 540, 625);
}

function Snake() {
  this.x = 300; 
  this.y = 300;
  this.xspeed = 0;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  this.score = 1;
  this.highscore = 1;
  this.dir = function(x,y) {
    this.xspeed = x;
    this.yspeed = y;
  }
//함수 생성, 음식을 먹을 때 점수를 1점씩 추가하고, 현재 점수가 최고 점수일 때 최고점수 변환
  this.eatf = function(pos) { 
    var d = dist(this.x, this.y, pos.x, pos.y); // 음식과 뱀의 거리를 구한다.
    if (d < 1) { //d<1 : 뱀이 음식을 먹었을 때,
      this.total++;
      this.score++;
      count ++;
      text(this.score, 70, 625); // this.score 값을 (70,625) 위치에 표시
      if (this.score > this.highscore) { // if(조건) 조건이 참일 때 실행
        this.highscore = this.score; 
      }
      text(this.highscore, 540, 625); //this.highscore 값을 (540,625) 위치에 표시
      return true; //true 반환
    } else {
      return false; //false 반환
    }
}
// 장애물을 먹을 때 점수, 꼬리 초기화
  this.eato = function(pos) { 
    var d = dist(this.x, this.y, pos.x, pos.y); // 장애물과 뱀의 거리를 구한다.
    if (d < 1) { //d<1 : 뱀이 장애물을 먹었을 때,
      this.reset();
      return true; //true 반환
    } else {
      return false; //false 반환
    }
}
  this.death = function() { 
    if(this.x<0||this.x>580||this.y<0||this.y>580){
      this.reset();
    }
  }
 // 뱀 움직임을 표시하기 위한 좌표 설정 
  this.update = function(){
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length-1; i++) {
        this.tail[i] = this.tail[i+1];
    }
    }
    this.tail[this.total-1] = createVector(this.x, this.y);
    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;
    this.x = constrain(this.x, -scl, playfieldW);
    this.y = constrain(this.y, -scl, playfieldW);
  }
 //함수 생성, 뱀 형태 만들기 
  this.show = function(){
    //fill(255);
    for (var i = 0; i < this.tail.length; i++) {
        //ellipse(this.tail[i].x, this.tail[i].y, scl, scl);
      image(crab, this.tail[i].x, this.tail[i].y, scl, scl);
    }
    //ellipse(this.x, this.y, scl, scl);
    image(crab, this.x, this.y, scl, scl);  
  }
  this.reset = function(){
    this.x = 300;
    this.y = 300;
    this.xspeed = 0;
    this.yspeed = 0;
    this.total = 0;
    this.score = 1;
    this.tail = [];
    foodLocatrion(); 
    ObstacleLocatrion();
    check = 'End';
  }
}
function keyPressed() { //키보드 인식 , reset 키 
  if (keyCode === UP_ARROW){
      s.dir(0, -1);
  }else if (keyCode === DOWN_ARROW) {
      s.dir(0, 1);
  }else if (keyCode === RIGHT_ARROW) {
      s.dir (1, 0);
  }else if (keyCode === LEFT_ARROW) {
      s.dir (-1, 0);
  }
  if(check == 'start'||check == 'End'){
    if(key == ' '){
      count=0;
      check = 'playing';
      foodLocatrion();
      ObstacleLocatrion();
    }
  }
}
function drawKeypoints() {
  for (let i = 0; i < predictions.length; i += 1) {
    const prediction = predictions[i];
    const k20 = prediction.landmarks[20];
    const k4 = prediction.landmarks[4];
    const k0 = prediction.landmarks[0];
    if(k4[0]>k0[0] && k4[1]<k0[1] && k20[1]<k4[1])
      s.dir(0, -1);
    else if(k4[0]>k0[0] && k4[1]>k0[1])
      s.dir(0, 1);
    else if(k4[0]<k0[0] && k4[1]<k0[1])
      s.dir (1, 0);
    else if(k4[0]>k0[0] && k4[1]<k0[1] && k20[1]>k4[1])
      s.dir (-1, 0);
  }
}
