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
let startpg, endpg, scorepg;
var count=1;
var d1

let bgPic, crab, shark, burger;
let bgUrl = "https://thumbs.dreamstime.com/b/sand-under-sea-abstract-marine-design-template-blue-deep-ocean-180905891.jpg";

function preload() {
  bgPic = loadImage(bgUrl);
  shark = loadImage("shark.png");
  crab = loadImage("crab.png");
  burger = loadImage("burger.png");
}

function setup() {
  createCanvas(playfieldW, playfieldH);
  startpg = createGraphics(playfieldW, playfieldH);
  endpg = createGraphics(playfieldW,playfieldH);
  scorepg = createGraphics(600,40);
  //background(51);
  //image(bgPic, 0, 0);
  s = new Snake();
  frameRate (10);
  foodLocatrion(); 
  ObstacleLocatrion();
  textFont("Georgia");
}
function draw() {
  if(check == 'start'){
    image(startpg, 0, 0);
    fill(255);
    for(var i = 0; i < 15 ; i++){
      for(var j = 0; j < 16 ; j++){
        rect(0+40*i,0+40*j,40,40);
      }
    }
    fill('red');
    textSize(80);
    text("Snake Game",80,240);
    textSize(56);
    text("Press SPACE to start",42,520);
  }
  else if(check == 'End'){
    endpg.background(0);
    image(endpg,0,0);
    fill('red');
    textSize(56);
    text("Game Over",160,320);
    textSize(40);
    text("Score: ", 160, 400);
    text(count+1, 400, 400);
  }
  else if(check == 'playing'){
    //background(51);
    image(bgPic, 0, 0);
    if (s.eatf(food)){ foodLocatrion(); }
    if (s.eato(obstacle)) { ObstacleLocatrion(); }
    s.death(); 
    s.update(); 
    s.show(); 
    //fill (255,0,100); 
    //ellipse(food.x,food.y, scl, scl);
    image(burger, food.x, food.y, scl, scl);
    //fill (0,255,0); 
    //ellipse(obstacle.x,obstacle.y, scl, scl);
    image(shark, obstacle.x, obstacle.y, scl, scl);
    scoreboard(); 
    if(count ==5)
      ObstacleLocatrion1();
    if(count >5){
    if (s.eato(obstacle1)) { ObstacleLocatrion1(); }
    //fill (0,255,0); 
    //ellipse(obstacle1.x,obstacle1.y, scl, scl);
      image(shark, obstacle1.x, obstacle1.y, scl, scl);
    }
    if(count ==10)
      ObstacleLocatrion2();
    if(count >10){
    if (s.eato(obstacle2)) { ObstacleLocatrion2(); }
    //fill (0,255,0); 
    //ellipse(obstacle2.x,obstacle2.y, scl, scl);
      image(shark, obstacle2.x, obstacle2.y, scl, scl);
    }
    if(count ==20)
      ObstacleLocatrion3();
    if(count >20){
    if (s.eato(obstacle3)) { ObstacleLocatrion3(); }
    //fill (0,255,0); 
    //ellipse(obstacle3.x,obstacle3.y, scl, scl);
      image(shark, obstacle3.x, obstacle3.y, scl, scl);
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
  text(s.score, 70, 625);
  text(s.highscore, 540, 625);
}

function Snake() {
  this.x =0; // 시작 좌표값이 사각형과는 다르게 10 이 되어야 기존 사각형에서 0,0 이던 값에서 출발한다. 아닐 경우 원이 잘려서 시작해서 픽셀이 깨져서 나온다.
  this.y =0; // 이하동문
  this.xspeed = 1;
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
    this.x = 0;
    this.y = 0;
    this.xspeed = 0;
    this.yspeed = 0;
    this.total = 0;
    this.score = 1;
    this.tail = [];
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
  }else if (key == ' '){
    count=0;
    check = 'playing';
  }
}
