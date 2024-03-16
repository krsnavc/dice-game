// // var temp = 15
// // var name = 'ja'
// // function test() {
// //   var temp = 1
// //   console.log(this.temp)
// // }

// // var OB = {
// //   name: 'Kr',
// //   fu: function ja() {
// //     console.log(this.name)
// //   },
// // }
// // OB.fu()
// // // var test = () => {
// // //   var temp = 1
// // //   console.log(thtemp)
// // // }

// // // console.log('Testing')
// // test()

// // const person = {
// //   name: 'John',
// //   lname: 'tiwari',
// //   gender: 'male',
// // }

// // const person2 = {
// //   game: 'god',
// // }

// // person.__proto__ = person2

// // // console.log(person)
// // arr1 = [1, 2, 34]
// // Array.prototype.customMap = (fnArg) => {
// //   let arr1 = []

// //   for (var i = 0; i < this.length; i++) {
// //     arr1.push(fnArg(this[i], i, this))
// //   }
// // }
// // result = arr.customMap((element)={
// //   return element/10
// // })
// // Array.prototype.myFilter = function (callbackFn) {
// //   var arr = []
// //   for (var i = 0; i < this.length; i++) {
// //     if (callbackFn.call(this, this[i], i, this)) {
// //       arr.push(this[i])
// //     }
// //   }
// //   return arr
// // }

// // const result=
// // --------------------------------------------------------------
// // function calAge(birthYear) {
// //   const age = 2037 - birthYear

// //   function printAge() {
// //     const output = `you are ${age} old, born in ${birthYear}`
// //     console.log(output)
// //   }
// //   return age
// // }

// // calAge(1991)
// // printAge()
// // --------------------------------------------------------------
// // let globalVar = 12

// // function x() {
// //   var variable = 10
// //   function y() {
// //     console.log(globalVar, variable)
// //   }
// //   return y
// // }

// // var z = x()
// // z()

// // function calAge(birthYear) {
// //   const age = 2037 - birthYear

// //   function printAge() {
// //     const output = `you are ${age} old, born in ${birthYear}`
// //     console.log(output)
// //   }
// //   return printAge
// // }

// // const kr = calAge(1991)
// // kr()

// // console.log('hello world')
// // function kri() {
// //   console.log('kri')
// //   this.obj = {
// //     fName: 'krishna',
// //   }
// // }
// // var k = new kri()
// // k.obj.lastName = 'cha'
// // console.log(k.obj.lastName)

// // var OB = {
// //   name: 'Kr',
// //   fu: function ja() {
// //     console.log(this.name)
// //   },
// // }

// // OB.fu()

// let array = [12, 22, 30, 412, 50];

// Array.prototype.customEvery = function (fnArgs) {
//   let count = 0;
//   for (let i = 0; i < this.length; i++) {
//     if (fnArgs(this[i], i, this)) {
//       count = count + 1;
//     }
//   }

//   return count === this.length;
// };
// document.getElementsByTagName

// const customEveryResult = array.customEvery((element, index, arr) => {
//   if (element < 0) {
//     return true;
//   }
//   return false;
// });

// console.log(customEveryResult);

// ------------------------------------------------dice game logics

let firstPlayerName = '';
let secondPlayerName = '';

let firstPlayerScore = 0;
let secondPlayerScore = 0;

let totalScore = 0;

function onSubmit(event) {
  event.preventDefault();
  const formData = document.getElementsByTagName('input');
  firstPlayerName = formData[0].value;
  secondPlayerName = formData[1].value;
  totalScore = formData[2].value;

  document.getElementById('form-container').style.display = 'none';
  document.getElementById('board-container').style.display = 'block';

  document
    .getElementById('player1')
    .getElementsByClassName('heading')[0].innerHTML = firstPlayerName;
  document
    .getElementById('player2')
    .getElementsByClassName('heading')[0].innerHTML = secondPlayerName;
}

function rollDice(playerIndex) {
  const randomNumber = getRandomNumber();
  const playerNodes = document.getElementById(`player${playerIndex}`);
  playerNodes
    .querySelector('.dice img')
    .setAttribute('src', `../images/dice${randomNumber}.png`);
  switch (playerIndex) {
    case 1:
      firstPlayerScore += randomNumber;
      playerNodes.getElementsByClassName('score')[0].innerHTML =
        firstPlayerScore;
      playerNodes
        .getElementsByTagName('input')[0]
        .setAttribute('disabled', true);
      document
        .getElementById('player2')
        .getElementsByTagName('input')[0]
        .removeAttribute('disabled');
      break;
    case 2:
      secondPlayerScore += randomNumber;
      playerNodes.getElementsByClassName('score')[0].innerHTML =
        secondPlayerScore;
      playerNodes
        .getElementsByTagName('input')[0]
        .setAttribute('disabled', true);
      document
        .getElementById('player1')
        .getElementsByTagName('input')[0]
        .removeAttribute('disabled');
      break;
    default:
      break;
  }
  checkIfWinnerExists();
}

function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function checkIfWinnerExists() {
  if (firstPlayerScore >= totalScore) {
    document.getElementById(
      'player1'
    ).innerHTML += `<div class="winner"></div>`;
    document
      .getElementById('player2')
      .getElementsByTagName('input')[0]
      .setAttribute('disabled', true);
  }

  if (secondPlayerScore >= totalScore) {
    document.getElementById(
      'player2'
    ).innerHTML += `<div class="winner"></div>`;
    document
      .getElementById('player1')
      .getElementsByTagName('input')[0]
      .setAttribute('disabled', true);
  }
}
