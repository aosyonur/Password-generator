const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");
let passwordLength = "";

// SELECT LENGHT SECTION //

let selectLenght = document.getElementById("pw-select");
selectLenght.addEventListener("change", function () {
  let lenghtValue = selectLenght.value;
  passwordLength = lenghtValue;
});

// =================== //

function getRandomCharacter() {
  let randomCharacter = Math.floor(Math.random() * characters.length);
  return characters[randomCharacter];
}

function generate() {
  let randomPasswordOne = "";
  let randomPasswordTwo = "";
  for (let index = 0; index < passwordLength; index++) {
    randomPasswordOne += getRandomCharacter();
    randomPasswordTwo += getRandomCharacter();
  }
  passwordOne.textContent = randomPasswordOne;
  passwordTwo.textContent = randomPasswordTwo;
}

//COPY SECTION //
passwordOne.addEventListener("click", function () {
  navigator.clipboard.writeText(passwordOne.textContent);
  alert("Password one copied.");
});

passwordTwo.addEventListener("click", function () {
  navigator.clipboard.writeText(passwordTwo.textContent);
  alert("Password two copied.");
});
//=============//

// IT WORKS LIKE THIS TOO WITHOUT "getRandomCharacter function" //

// function generate() {
//   let randomPasswordOne = "";
//   let randomPasswordTwo = "";
//   for (let i = 0; i < passwordLength; i++) {
//     let randomCharacter = Math.floor(Math.random() * characters.length);
//     randomPasswordOne += characters[randomCharacter];
//     let randomCharacter2 = Math.floor(Math.random() * characters.length);
//     randomPasswordTwo += characters[randomCharacter2];
//   }
//   passwordOne.textContent = randomPasswordOne;
//   passwordTwo.textContent = randomPasswordTwo;
// }

// IT WORKS LIKE THIS TOO //
