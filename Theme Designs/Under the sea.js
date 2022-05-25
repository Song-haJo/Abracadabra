// 오후 9:56 2022-05-25
// Code.js에서 수정한 코드입니다.
// 배경을 이미지로 교체하고, snake를 shark 아이콘으로 바꿔봤습니다.
// Source of images
// shark: https://www.seekpng.com/png/detail/607-6074479_shark-silhouette-clipart-shark-clip-art-makeup-brush.png
// crab: https://www.google.com/url?sa=i&url=https%3A%2F%2Fcliparting.com%2Ffree-crab-clipart-14096%2F&psig=AOvVaw3XV62LyBhnKNvjAKs12egk&ust=1653584264093000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCPj5yMaP-_cCFQAAAAAdAAAAABAD
// burger: https://us.123rf.com/450wm/hugolacasse/hugolacasse1806/hugolacasse180600023/104344433-vector-hamburger-clip-art-illustration.jpg?ver=6
//==================================================================================================================================================

// Direction과 Snake를 합친 코드입니다. 
// 길이가 3 이상일 때 가던 방향의 반대 방향으로 가거나 벽에 부딪치면 죽는 판정을 빼고 먹으면 죽는 먹이를 추가하는 게 게임을 플레이하기에 수월해 보입니다. <- 수정 완료
// 손이 카메라에서 벗어나기가 쉬워서 카메라 안에 들어오는지 확인할 수 있도록 게임 화면의 왼쪽이나 오른쪽에 비디오를 넣는 것도 좋아 보입니다.
let handpose;
let video;
let predictions = [];

var s;
var scl = 20;
var food;
var obstacle;
var playfield = 600;

//----------------------------------------------------s
let bgPic, crab, shark, burger;
let bgUrl = "https://thumbs.dreamstime.com/b/sand-under-sea-abstract-marine-design-template-blue-deep-ocean-180905891.jpg";

function preload() {
  bgPic = loadImage(bgUrl);
  shark = loadImage("shark.png");
  crab = loadImage("crab.png");
  burger = loadImage("burger.png");
}
//----------------------------------------------------e

function setup() {
    createCanvas(600, 640);
    video = createCapture(VIDEO);
    video.hide();
    handpose = ml5.handpose(video);
    handpose.on("predict", gotResult);
//----------------------------------------------------s
    //background(51);   // 배경색
    image(bgPic, 0, 0);
//----------------------------------------------------e
    s = new Snake();  // 스네이크 함수 생성
    frameRate (10);   // 프레임 시작값은 60이기 때문에 속도 조정
    foodLocatrion();  // foodLocatrion 함수 생성
    ObstacleLocatrion();
}

function gotResult(results){
    predictions = results;
}

function draw() {
    drawKeypoints();
//----------------------------------------------------s
    //background(51);          // 배경색 설정
    image(bgPic, 0, 0);
//----------------------------------------------------e
    scoreboard();            // scoreboard 함수 실행
    if (s.eatf(food)) {      // Snake 함수 안의 eat 함수가 true 일 때 실행
        foodLocatrion();     // foodLocatrion 함수 실행
    }
    if (s.eato(obstacle)) {  // Snake 함수 안의 eat 함수가 true 일 때 실행
        ObstacleLocatrion(); // foodLocatrion 함수 실행
    }
    //s.death();   // Snake 함수 안의 death 함수 실행
    s.update();   // Snake 함수 안의 update 함수 실행
    s.show();     // Snake 함수 안의 show 함수 실행
    //fill (255,0,100); 
    //ellipse(food.x,food.y, scl, scl);          // 먹이 생성
    image(burger, food.x, food.y, scl*1.3, scl*1.3);
    //fill (0,255,0); 
    //ellipse(obstacle.x,obstacle.y, scl, scl);  // 장애물(천적) 생성
    image(shark, obstacle.x, obstacle.y, scl*2, scl*1.3);
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

function foodLocatrion() { 
    //var cols = floor(playfield/scl); /반 내림할 숫자, 매개변수의 작거나 같은 수 중 가장 가까운 정수 
    var rows = floor(playfield/scl); 
    cols = floor(random(30))*scl;
    rows = floor(random(30))*scl;
    food = createVector(10, 10);
    food.add(cols,rows); //백터에 scl를 더함
    //food.mult(scl);
    // Check the food isn't appearing inside the tail
    for (var i = 0; i < s.tail.length; i++) { 
        var pos = s.tail[i];
        var d = dist(food.x, food.y, pos.x, pos.y);
        if (d < 20) {
            foodLocatrion();
        }
    }
}
// 장애물 위치 설정
function ObstacleLocatrion() { 
    //var cols = floor(playfield/scl); /반 내림할 숫자, 매개변수의 작거나 같은 수 중 가장 가까운 정수 
    var rows = floor(playfield/scl); 
    cols = floor(random(30))*scl;
    rows = floor(random(30))*scl;
    obstacle = createVector(10, 10);
    obstacle.add(cols,rows); // 벡터에 scl를 더함
    //food.mult(scl);
    // Check the food isn't appearing inside the tail
    for (var i = 0; i < s.tail.length; i++) { 
        var pos = s.tail[i];
        var d = dist(obstacle.x, obstacle.y, pos.x, pos.y);
        if (d < 20) {
            ObstacleLocatrion();
        }
    }
}

function scoreboard() { // 점수판(scoreboard)
    fill("#ffe7c0");
    rect(0, 600, 600, 40);
    fill("#ff8000");
    textFont("Georgia");
    textSize(18);
    text("Score: ", 10, 625);
    text("Highscore: ", 450, 625)
    text(s.score, 70, 625);
    text(s.highscore, 540, 625)
}

// SNAKE OBJECT 스네이크 오브젝트 
function Snake() {
    this.x = 10; // 시작 좌표값이 사각형과는 다르게 10 이 되어야 기존 사각형에서 0,0 이던 값에서 출발한다. 아닐 경우 원이 잘려서 시작해서 픽셀이 깨져서 나온다.
    this.y = 10; // 이하동문
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
    // 함수 생성, 음식을 먹을 때 점수를 1점씩 추가하고, 현재 점수가 최고 점수일 때 최고점수 변환
    this.eatf = function(pos) { 
        var d = dist(this.x, this.y, pos.x, pos.y); // 음식과 뱀의 거리를 구한다.
        if (d < 1) {                            // d<1 : 뱀이 음식을 먹었을 때,
            this.total++;
            this.score++;
            text(this.score, 70, 625);          // this.score 값을 (70, 625) 위치에 표시
            if (this.score > this.highscore) {  // if(조건) 조건이 참일 때 실행
                this.highscore = this.score; 
            }
            text(this.highscore, 540, 625);     // this.highscore 값을 (540, 625) 위치에 표시
            return true;  // true 반환
        } else {
            return false; // false 반환
        }
    }
    // 장애물을 먹을 때 점수, 꼬리 초기화
    this.eato = function(pos) { 
        var d = dist(this.x, this.y, pos.x, pos.y); // 장애물과 뱀의 거리를 구한다.
        if (d < 1) {              // d<1 : 뱀이 장애물을 먹었을 때,
            this.total=0;
            this.score=0;
            this.tail = [];
            return true;          // true 반환
        } else {
            return false;         // false 반환
        }
    }
    // 함수 생성, 머리가 꼬리에 닿으면 점수, 꼬리 초기화 
    /*  this.death = function() { //death 
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 20) {
        this.total = 0;
        this.score = 0;
        this.tail = [];
      }
    }
  }*/
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
        this.x = constrain(this.x, scl/2, playfield-scl/2);
        this.y = constrain(this.y, scl/2, playfield-scl/2);
    }
    // 함수 생성, 뱀 형태 만들기
    this.show = function(){
        //fill(255);
        image(crab, this.x, this.y, scl*1.5, scl*1);                      // Sebastian the crab
        for (var i = 0; i < this.tail.length; i++) {
            //ellipse(this.tail[i].x, this.tail[i].y, scl, scl);
            image(crab, this.tail[i].x, this.tail[i].y, scl*1.5, scl*1);  // And his friends
        }
        //ellipse(this.x, this.y, scl, scl);
    }
    this.reset = function(){ // Reset을 위한 함수를 따로 생성. 첫 시작값과 똑같이 감.
        this.x =10;
        this.y =10;
        this.xspeed = 1;
        this.yspeed = 0;
        this.total = 0;
        this.tail = [];
        this.score = 1;
        this.highscore = 1;
    }

}
