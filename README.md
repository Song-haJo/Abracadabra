# 아브라카다브라!
#### 과목명: 컴퓨터 그래픽스<br/>지도교수: 컴퓨터공학과 심재창<br/>프로젝트명: 아브라카다브라! (Abracadabra!)<br/>과제명: 아브라카다브라<br/>프로젝트 팀: 피리부는 사나이(5팀)<hr/>
### 팀 구성
|   번호   |   구분  |                   이름                  |      학과     |   학년  |      휴대폰     |        담당업무        |
|:-------:|:------:|:---------------------------------------:|:--------------:|:------:|:---------------:|:----------------------|
|  **1**  | **팀장**|**[최연우](https://github.com/wafla)**    |**컴퓨터공학과**|  **2** |**010-2224-9395**|    발표, 코드 작성    |
|    2    |   팀원  | [서정목](https://github.com/SeoJeongmok) |  컴퓨터공학과  |   2    |  010-9005-6102  | 발표자료 제작, 코드 작성 |
|    3    |   팀원  | [조송하](https://github.com/Song-haJo)   |    무역학과    |   3    |  010-3808-8152  |  보고서 작성, 코드 작성 |
|    4    |   팀원  | [허영준](https://github.com/telecom9005) |  컴퓨터공학과  |   2    |  010-2748-9005  | 발표자료 제작, 코드 작성  |
<hr/>

## 1. 과제 요약
스네이크 게임은 비디오 게임의 한 장르로, 벽과 같은 장애물을 피해 먹이를 먹도록 조종하는 뱀을 키우는 게임이다. 본 과제에서는 p5.js 기반으로 작성된 스네이크 게임에 머신러닝 라이브러리인 ml5.js를 적용하여 손동작을 통해 뱀을 조작할 수 있도록 하였다. ml5.js란 2018년 7월 뉴욕 대학교에서 TensorFlow.js 기반으로 구축한 머신러닝 알고리즘 라이브러리로, 웹에서 사용 가능한 오픈 소스 고급 라이브러리이기 때문에 초보자들도 쉽게 이용이 가능하다는 장점이 있다.
## 2. 과제 개요
<ol type="i">
    <h3><li>과제 배경 및 필요성</li></h3>
    2022년도 1학기 컴퓨터그래픽스 수업에서 배운 내용은 다음과 같다:<br/>
<ul>
        <li>Processing</li>
        <li>p5.js</li>
        <li>OpenGL</li>
        <li>ml5.js</li>
    </ul>
본 과제는 본 수업의 최종 팀 프로젝트로, 그동안 공부한 것들을 복습하고, 그중 p5.js와 ml5.js를 활용하여 Application을 프로그래밍해 봄으로써 협업 능력을 수양하기 위함이다.
    <h3><li>주제 선택 동기</li></h3>
    본 수업에서는 과제를 통해 Snake 게임을 p5.js 기반으로 프로그래밍하는 연습을 진행한 바 있다. 최근 수업에서 ml5.js를 중심으로 인공지능과 머신 러닝에 대해 다룸에 따라, 주제 선택은 ml5.js를 기존의 p5.js 기반 Snake 게임에 적용하여 키보드가 아닌 ‘손의 부위별 포인트 찾기’를 통해 조작할 수 있는 방안을 도출해내는 것으로 결정되었다.
</ol>

## 3. 과제 목표 및 내용
<ol type="i">
    <h3><li>정량적·정성적 목표 및 평가 기준</li></h3>
    <table>
        <thead>
            <tr>
                <th colspan="7">정성적 평가</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th rowspan="2">번호</th>
                <th rowspan="2" width="400px">평가 기준</th>
                <th colspan="5">평가 척도</th>
            </tr>
            <tr>
                <th width="120px">매우 그렇다</th>
                <th width="120px">그렇다</th>
                <th width="120px">보통이다</th>
                <th width="120px">그렇지 않다</th>
                <th width="120px">전혀 그렇지 않다</th>
            </tr>
            <tr>
                <td align="center">1</td>
                <td>과제 내용이 Graphics와 관련이 있는가?</td>
                <td align="center">5</td>
                <td align="center">4</td>
                <td align="center">3</td>
                <td align="center">2</td>
                <td align="center">1</td>
            </tr>
            <tr>
                <td align="center">2</td>
                <td>손 모양을 정확하게 인식하는가?</td>
                <td align="center">5</td>
                <td align="center">4</td>
                <td align="center">3</td>
                <td align="center">2</td>
                <td align="center">1</td>
            </tr>
            <tr>
                <td align="center">3</td>
                <td>뱀을 자신이 원하는 방향으로 움직일 수 있는가?</td>
                <td align="center">5</td>
                <td align="center">4</td>
                <td align="center">3</td>
                <td align="center">2</td>
                <td align="center">1</td>
            </tr>
        </tbody>
    </table>
    <h3><li>과제 내용 및 수행 </li></h3>
     <ol type="a">
        <h4><li>머신러닝 모델 선택(22.05.16.월-22.05.17.화)</li></h4>
        ml5.js 머신러닝 라이브러리에서 활용할 모델을 선택한다. ml5js.org 홈페이지의 Reference 페이지와 Prof. Daniel Shiffman의 유튜브 채널 Coding Train을 참고하여 주제와 관련된 모델들의 기능을 익힌 후, 비교·대조를 통해 KNNClassifier와 Handpose 중 후자를 선택하였다. KNNClassifier(K-Nearest Neighbors Classifier)는 신체 전체의 포즈를 파악하는 모델로, 초기 팔부터 손까지에 해당하는 부위를 움직여 조종하는 기능을 구상할 때 고려하였으나, 보다 높은 정확도와 편의성을 위해 손 동작만 인식하는 Handpose로 대체하였다.
        <h4><li>손 모양 학습 진행 및 손 동작 인식 기능 추가(22.05.18.수-)</li></h4>
        선택한 모델을 적용하여 손 모양을 학습시킨 후, 학습 파일을 게임 내부에서 load하여 손 동작 인식 기능을 추가한다. 학습 파일의 확장자는 .json으로, 과도하지도 부족하지도 않은 적정한 학습에 의해 생성되어야 한다.
        
  <table align="center">
            <tr>
                <th rowspan="2">이동 방향</th>
                <th colspan="2">손의 방향</th>
            </tr>
            <tr>
                <th>플레이어 시점</th>
                <th>카메라 시점<br/>(웹캠 촬영 사진 첨부)</th>
            </tr>
            <tr>
                <td align="center">상</td>
                <td align="center">위</td>
                <td align="center">손바닥이 보이는 상태로 손가락 끝이 위를 향한다.<br/><img width="195px" height="145px" src="https://user-images.githubusercontent.com/102509603/169253224-041bb900-0f92-46f3-b136-f3b2bfdd0028.png"/></td>
            </tr>
            <tr>
                <td align="center">하</td>
                <td align="center">아래</td>
                <td align="center">손등이 보이는 상태로 손가락 끝이 아래를 향한다.<br/><img width="195px" height="145px" src="https://user-images.githubusercontent.com/102509603/169255285-7e919de5-c45b-429d-b871-0572356d6b34.png"/></td>
            </tr>
            <tr>
                <td align="center">좌</td>
                <td align="center">좌측</td>
                <td align="center">손등이 보이는 상태로 손가락 끝이 오른쪽을 향한다.<br/><img width="195px" height="145px" src="https://user-images.githubusercontent.com/102509603/169256106-72e3e64a-77e8-4a1e-9f6a-e8fb9a3dccac.png"/></td>
            </tr>
            <tr>
                <td align="center">우</td>
                <td align="center">우측</td>
                <td align="center">손바닥이 보이는 상태로 손가락 끝이 왼쪽을 향한다.<br/><img width="195px" height="145px" src="https://user-images.githubusercontent.com/102509603/169256768-f8b3ccb0-2155-40ee-925c-81be35ec8ec4.png"/></td>
            </tr>
        </table>
        <h4 align="center">&lt;손 모양 사진&gt;</h4>
        <table border="0" align="center">
        <tr>
            <td colspan="3" align="center"><img width="195px" height="145px" src="https://user-images.githubusercontent.com/102509603/169253224-041bb900-0f92-46f3-b136-f3b2bfdd0028.png"/><br/>상</td>
        </tr>
        <tr>
            <td align="center">
                <img width="195px" height="145px" src="https://user-images.githubusercontent.com/102509603/169256106-72e3e64a-77e8-4a1e-9f6a-e8fb9a3dccac.png"/><br/>좌
            </td>
            <td width="200px"></td>
            <td align="center">
                <img width="195px" height="145px" src="https://user-images.githubusercontent.com/102509603/169256768-f8b3ccb0-2155-40ee-925c-81be35ec8ec4.png"/><br/>우
            </td>
        </tr>
        <tr>
            <td colspan="3" align="center"><img width="195px" height="145px" src="https://user-images.githubusercontent.com/102509603/169255285-7e919de5-c45b-429d-b871-0572356d6b34.png"/><br/>하</td>
        </tr>
    </table>
        ml5_code.js 파일은 KNNClassifier 모델을 사용한 프로그램으로 초기 버전이며, Handpose를 이용한 버전이 곧 추가될 예정이다.
        <h4><li>Snake 게임 디자인 개선 및 기능 디버깅</li></h4>
        기능을 추가시킨 후, 인식이 잘 되는지 여부를 확인하고 오류가 있거나 개선이 필요한 부분은 수정한다.
        <ul>
            <li>기존 Snake 게임은 뱀이 음식을 먹을 때마다 뱀의 길이가 길어지고, 뱀이 벽이나 자신의 몸에 부딪치면 game over 되는 방식이다. ml5_code.js를 통한 시험 과정에서 뱀이 3칸 이상일 때, 바로 반대 방향으로 방향을 틀면 죽는 현상을 발견하였다. 머신러닝을 통한 동작 인식과 그에 의한 조작은 키보드를 이용할 때보다 덜 정확하므로, 게임 진행에 융통성이 필요하다. 따라서, 스스로의 몸에 닿으면 죽는 판정을 삭제하였다.</li>
        </ul>
        또한, 기존의 Snake 게임의 디자인적 부분과 게임 자체 기능을 향상시킨다.(예정)
    </ol>

## 4. 결과물
<ol type="i">
    <h3><li>예상 결과물(구현 사항)</li></h3>
    <ul>
        <li>손가락의 각 마디와 손목 부위가 21개의 포인트로 감지되며, 손동작에 따라 포인트의 위치가 변경된다.</li>
        <li>손 모양을 인지하여 상하좌우로 방향이 구분하고 해당하는 방향으로 뱀의 이동방향이 결정된다.</li>
        <li>최종적으로, 키보드로 방향 키를 누르지 않고, 손 모양을 바꿔가면서 즐겁게 스네이크 게임을 플레이할 수 있도록 한다.</li>
    </ul>
    <h3><li>기대효과 및 활용방안</li></h3>
    최근 지역 치매안심센터 등 노인 관련 기관에 따르면 치매예방 게임교실 등 게임적 요소를 활용한 치매예방 프로그램을 적극 활용 중인 것으로 나타났다.<sup>[3]</sup> 게임의 경우, 단순 인지훈련을 넘어 시각, 촉각, 청각은 물론 공감각, 대인 소통 등 다양한 감각을 동원해 문제를 해결하는 과정을 포함하고 있어 치매예방에 효과적이라는 전문가 평가가 다수 있다. 본 게임은 단순한 동작으로 작동하는 게임이므로 어르신들이 익히기 쉬우며, 조작하는 과정에서 '벽'이라는 장애물과 생존에 필요한 '먹이'와 같이 다양한 요소를 신경 써야 하기 때문에 치매예방에 좋은 효과를 줄 것으로 기대된다.
</ol>

## 5. 수행일정
|  번호 |      내용      |            추진일정           |     비고    |
|:----:|:--------------:|:----------------------------:|:----------:|
|   1  |       기획     |   2022.05.16. - 2022.05.19.  |   계획서 작성   |
|   2  |     1차 구현    |   2022.05.19. - 2022.05.22.  |  손모양 인식 기능 추가  |
|   3  |     2차 구현    |         2022.05.23.          |  Snake 디자인 수정  |
|   4  |  발표자료 제작  |   2022.05.24. - 2022.05.30.  | ppt, 리플릿, 동영상 제작  |

## 6. 참고문헌 및 자료 (References written in IEEE format)
[1] ml5js·Friendly Machine Learning For The Web. https://ml5js.org/ (accessed May 17, 2022)

[2] KiWoon. "11.7 Finding points on each part of a hand: Handpose." p5 JavaScript and ml5 Machine Learning Library - WikiDocs. (2020). Accessed: May 17, 2022. [Online]. Available: https://wikidocs.net/103185 

[3] J. Jo, "The Frontline of The Dementia Patient Care Center. Increase in The Use of Games for Dementia Prevention." DementiaNews. https://www.dementianews.co.kr/news/articleView.html?idxno=3863 (accessed May 17, 2022)

[4] "Snake (video game genre)." Wikipedia. https://en.wikipedia.org/wiki/Snake_(video_game_genre) (accessed May 17, 2022)

[5] A. Lamba, "Introduction to ML⁵.js - A Beginner’s Friendly Machine Learning for the Web." Towards Data Science - Medium. https://towardsdatascience.com/introduction-to-ml5-js-3fe51d6a4661 (accessed May 17, 2022)

[6] The Coding Train. https://thecodingtrain.com/ (accessed May 17, 2022)
    
### 6.1. 이미지 출처
    
[햄버거]Hugolacasse. Hamburger Clip Art Vector Image. Accessed: Apr. 22, 2023. Available: https://www.vectorstock.com/royalty-free-vector/hamburger-clip-art-vector-21213147
  
[게]PngEgg. Crab.png. Accessed: Apr. 22, 2023. Available: https://www.pngegg.com/en/png-wmnli
    
[상어]Stephanie Wauters. Shark. (Sep. 10, 2014). Accessed: Apr. 22, 2023. Available: https://thenounproject.com/icon/shark-73318/
    
[게임 플레이 페이지 배경]Buddy_Nath. Underwater. Accessed: Apr. 22, 2023. Available: https://pixabay.com/illustrations/underwater-sea-ocean-plankton-blue-2615376/
    
[메인 페이지 배경]Shining. Inside Sea. Accessed: Apr. 22, 2023. Available: http://sketchpan.com/mypan/?id=il575952
    
[묘비석]SeekPng. Tombstone Sprite 002 - Tombstone Png Sprite. Accessed: Apr. 22, 2023. Available: https://www.seekpng.com/ipng/u2r5u2e6r5r5y3e6_tombstone-sprite-002-tombstone-png-sprite/
