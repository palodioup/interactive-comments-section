const numTxt = document.getElementById("bum-txt");
const numTxt1 = document.getElementById("bum-txt1");
const numTxt2 = document.getElementById("bum-txt2");
const numTxt3 = document.getElementById("bum-txt3");
let count = 12;
let count1 = 5;
let count2 = 5;
let count3 = 5;

const add = () => {
  count += 1;
  numTxt.innerHTML = count;
};

const subtract = () => {
  if (count <= 0) {
    alert("Cannot go less than 0");
  } else {
    count -= 1;
    numTxt.innerHTML = count;
  }
};

const add1 = () => {
  count1 += 1;
  numTxt1.innerHTML = count1;
};

const subtract1 = () => {
  if (count1 <= 0) {
    alert("Cannot go less than 0");
  } else {
    count1 -= 1;
    numTxt1.innerHTML = count1;
  }
};

const add2 = () => {
  count2 += 1;
  numTxt.innerHTML = count2;
};

const subtract2 = () => {
  if (count2 <= 0) {
    alert("Cannot go less than 0");
  } else {
    count2 -= 1;
    numTxt2.innerHTML = count2;
  }
};

const add3 = () => {
  count3 += 1;
  numTxt1.innerHTML = count3;
};

const subtract3 = () => {
  if (count3 <= 0) {
    alert("Cannot go less than 0");
  } else {
    count3 -= 1;
    numTxt3.innerHTML = count3;
  }
};
