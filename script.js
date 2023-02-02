//下部分から表示される虹
const p9red=document.getElementById("p9red");
const p9orange=document.getElementById("p9orange");
const p9yellow=document.getElementById("p9yellow");
const p9green=document.getElementById("p9green");
const p9blue=document.getElementById("p9blue");
const p9navy=document.getElementById("p9navy");
const p9purple=document.getElementById("p9purple");
var counter9=0;
const p9cloudsL=document.getElementById("p9clouds-left");
const p9cloudsR=document.getElementById("p9clouds-right");

document.getElementById("move9").onclick=function(){
   counter9++;

   if(counter9%2==1){
      p9red.classList.add("p9red");
      p9orange.classList.add("p9orange");
      p9yellow.classList.add("p9yellow");
      p9green.classList.add("p9green");
      p9blue.classList.add("p9blue");
      p9navy.classList.add("p9navy");
      p9purple.classList.add("p9purple");
      p9cloudsL.classList.add("p9clouds-left");
      p9cloudsR.classList.add("p9clouds-right");
   }else{
      p9red.classList.remove("p9red");
      p9orange.classList.remove("p9orange");
      p9yellow.classList.remove("p9yellow");
      p9green.classList.remove("p9green");
      p9blue.classList.remove("p9blue");
      p9navy.classList.remove("p9navy");
      p9purple.classList.remove("p9purple");
      p9cloudsL.classList.remove("p9clouds-left");
      p9cloudsR.classList.remove("p9clouds-right");
   }
}







// ホバーとかボタンで左から右へ下線が表示
const c8=document.getElementById("c8-btn");
var counter8=0;

document.getElementById("move8").onclick=function(){
   counter8++;

   if(counter8%2==1){
      c8.classList.add("c8-btn");
   }else{
      c8.classList.remove("c8-btn");
   }
}


// 七色がずれて動く
const p7red = document.getElementById("p7-red");
const p7orange = document.getElementById("p7-orange");
const p7yellow = document.getElementById("p7-yellow");
const p7green = document.getElementById("p7-green");
const p7blue = document.getElementById("p7-blue");
const p7navy = document.getElementById("p7-navy");
const p7purple = document.getElementById("p7-purple");
var counter7 = 0;

document.getElementById("move7").onclick = function () {
   counter7++;

   if (counter7 % 2 == 1) {
      p7red.classList.add("p7-red");
      p7orange.classList.add("p7-orange");
      p7yellow.classList.add("p7-yellow");
      p7green.classList.add("p7-green");
      p7blue.classList.add("p7-blue");
      p7navy.classList.add("p7-navy");
      p7purple.classList.add("p7-purple");
   } else {
      p7red.classList.remove("p7-red");
      p7orange.classList.remove("p7-orange");
      p7yellow.classList.remove("p7-yellow");
      p7green.classList.remove("p7-green");
      p7blue.classList.remove("p7-blue");
      p7navy.classList.remove("p7-navy");
      p7purple.classList.remove("p7-purple");
   }
}


//白い犬が動く
const p6 = document.getElementById("p6");
const c6 = document.getElementById("c6");
var counter6 = 0;

document.getElementById("move6").onclick = function () {
   counter6++;

   if (counter6 % 2 == 1) {
      p6.classList.add("p6");
      c6.classList.add("c6");
   } else {
      p6.classList.remove("p6");
      c6.classList.remove("c6");
   }
}



// 回転球を回転中心とする球
const p5 = document.getElementById("p5");
const c5 = document.getElementById("c5");
var counter5 = 0;

document.getElementById("move5").onclick = function () {
   counter5++;

   if (counter5 % 2 == 1) {
      p5.classList.add("p5");
      c5.classList.add("c5");
   } else {
      p5.classList.remove("p5");
      c5.classList.remove("c5");
   }
}





// 八色が回転
const p4LT = document.getElementById("p4LT");
const p4RT = document.getElementById("p4RT");
const p4RB = document.getElementById("p4RB");
const p4LB = document.getElementById("p4LB");
var counter4 = 0;

document.getElementById("move4").onclick = function () {
   counter4++;

   if (counter4 % 2 == 1) {
      p4LT.classList.add("colors-leftTop");
      p4RT.classList.add("colors-rightTop");
      p4RB.classList.add("colors-rightBottom");
      p4LB.classList.add("colors-leftBottom");

   } else {
      p4LT.classList.remove("colors-leftTop");
      p4RT.classList.remove("colors-rightTop");
      p4RB.classList.remove("colors-rightBottom");
      p4LB.classList.remove("colors-leftBottom");
   }
}



// 右に動きつつ原点回転し、中は左下原点回転
const p3Btn = document.getElementById("p3-btn");
const c3Btn = document.getElementById("c3-btn");
var moveBtnCounter3 = 0

document.getElementById("move-btn3").onclick = function () {
   moveBtnCounter3++;
   if (moveBtnCounter3 % 2 == 1) {
      p3Btn.style.cssText = "transform: rotate(20deg) translateX(80px); transform-origin:left bottom; transition: transform 1s ease .1s;";
      c3Btn.style.cssText = "transform: rotate(360deg) translateX(40px); transform-origin:left bottom; transition: transform 1s ease .1s;";
   } else {
      p3Btn.style.cssText = "transform: none; transform-origin:left bottom; transition: transform 1s ease .1s;";
      c3Btn.style.cssText = "transform: none; transform-origin:left bottom; transition: transform 1s ease .1s;";
   }
}



//右に動きつつ中が回転
const p2Btn = document.getElementById("p2-btn");
const c2Btn = document.getElementById("c2-btn");
var moveBtnCounter2 = 0

document.getElementById("move-btn2").onclick = function () {
   moveBtnCounter2++;
   if (moveBtnCounter2 % 2 == 1) {
      p2Btn.style.cssText = "transform: translateX(60px); transition: transform 1s ease .1s;";
      c2Btn.style.cssText = "transform: translate(120px,-40px) rotate(360deg); transition: transform 1s ease .1s;";
   } else {
      p2Btn.style.cssText = "transform: none; transition: transform 1s ease .1s;";
      c2Btn.style.cssText = "transform: none; transition: transform 1s ease .1s;";
   }
}



//右と左に動く
const p1Btn = document.getElementById("p1-btn");
const c1Btn = document.getElementById("c1-btn");
var moveBtnCounter1 = 0

document.getElementById("move-btn1").onclick = function () {
   moveBtnCounter1++;
   if (moveBtnCounter1 % 2 == 1) {
      p1Btn.style.cssText = "transform: translateX(60px); transition: transform 1s ease .1s;";
      c1Btn.style.cssText = "transform: translate(-40px,40px); transition: transform 1s ease .1s;";
   } else {
      p1Btn.style.cssText = "transform: translateX(0); transition: transform 1s ease .1s;";
      c1Btn.style.cssText = "transform: translate(0,0); transition: transform 1s ease .1s;";
   }
}





//thank you btn
const thankYouForSeeing=document.getElementById("thank-you-for-seeing");
const thankYouForSeeingText=document.getElementById("thank-you-for-seeing-text");

document.getElementById("thank-you-btn").onclick=function(){
   thankYouForSeeing.classList.add("thank-you-for-seeing");
   thankYouForSeeingText.classList.add("thank-you-for-seeing-text");
}







// 更新日の取得
const last = new Date(document.lastModified);
const year = last.getFullYear();
const month = last.getMonth() + 1;
const date = last.getDate();
// 日付を書き換える
const target = document.getElementById('modify');
target.textContent = year + '-' + month + '-' + date + '';
