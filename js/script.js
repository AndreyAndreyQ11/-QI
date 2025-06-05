"use strict";

/*
let q1 = 0;


while (q1 <= 4) {
  console.log(q1);
  q1++;
}

for (let qq1 = 0; qq1 < 4; qq1++) { //Начало Условие Шаг
  console.log(qq1);
}

let qq2 = 0;            //Вариант записи №2 (2 раза выполнить условие)
for (const i = 0; i < 4; i += 1) {
  qq2++
  console.log(qq2);
}

let qq3 = 2;            //св-во  break
for (; qq3 < 11; qq3 += 1) {
  console.log(qq3);
  if (qq3 == 7) break;
}

fristFor: for (let q = 1; q < 3; q += 1) {
  console.log('q', q);
  for (let w = 0; w < 4; w++) {
    if (w == 3) {
      break fristFor;
    }
    console.log('w', w);
  }

}


fristFor: for (let q = 1; q < 3; q += 1) {
  console.log('q', q);
  for (let w = 0; w < 4; w++) {
    if (w == 3) {
      break fristFor;
    }
    console.log('w', w);
  }

}



let textarea3 = document.querySelector('.textarea3');
const button1 = document.querySelector('.button1');

//textarea1.value.split('')
//console.log(textarea1.value.split(''));

function sravnenieTexta() {
  let textarea1 = document.querySelector('.textarea1');
  let textarea2 = document.querySelector('.textarea2');


  let x = textarea1.value.split('');
  let y = textarea2.value.split('');
  let i = 0;
  let sumSymb = 0;
  console.log(x);
  console.log(y);


  for (let i = 0; i < x.length; i += 1) {
    if (x[i] == y) {
      sumSymb += 1;
    }
  }
  console.log(sumSymb);

  textarea3.value = sumSymb;
}


button1.addEventListener('click', sravnenieTexta);

*/
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".bloc_item3");
const img1 = document.querySelector(".img1");
const p1 = document.querySelector(".p1");
const bloc_item1 = document.querySelector(".bloc_item1");

const button3 = document.querySelector(".button3");

let x = 380;
let y = 170;

button2.onmouseover = function () {
  for (let y1, x1; ; ) {
    y1 = Math.floor(295 * Math.random()); // y1 = Math.round(295 * Math.random());
    x1 = Math.floor(435 * Math.random()); // x1 = Math.round(435 * Math.random());
    console.log(`${x1}x1`);
    console.log(`${y1}y1`);
    if (
      (y1 > 220 || y1 < 120 || x1 > 155) &&
      (y1 > 30 || x1 > 335 || x1 < 125) &&
      (y1 > y + 50 || y1 < y - 50 || x1 > x + 110 || x1 < x - 110)
    ) {
      y = y1;
      x = x1;
      console.log(`${x}x`);
      console.log(`${y}y`);
      break;
    }
  }

  /*
    for (y1 = y; y1 > y & y1 < y - 50 | y1 > 170 & y1 < 120;) {
      y1 = Math.round(295 * Math.random());
      console.log(y1);
    }
    console.log(y1);
    
   while (y1 < y & y1 > y - 50 | y1 < 170 & y1 > 120) {
    y = Math.round(295 * Math.random());
     console.log(y);
     reto
   }
   
    console.log(y);
    let x = Math.round(435 * Math.random());
    let x1 = x;
    while (x1 < x & x1 > x - 110 | x1 < 45 & x1 > 0) {
      x = Math.round(435 * Math.random());
    }
  */
  button2.style.top = `${y}px`;
  button2.style.left = `${x}px`;
};

button1.addEventListener("click", foo1);

function foo1() {
  img1.style.display = "block";
  p1.style.display = "block";
  button1.style.display = "none";
  button2.style.display = "none";
  bloc_item1.style.display = "none";
  button3.style.display = "block";
}

button3.addEventListener("click", foo2);

function foo2() {
  img1.style.display = "none";
  p1.style.display = "none";
  button1.style.display = "block";
  button2.style.display = "block";
  bloc_item1.style.display = "block";
  button2.style.top = "170px";
  button2.style.left = "380px";
  button3.style.display = "none";
  x = 380;
  y = 170;
}
