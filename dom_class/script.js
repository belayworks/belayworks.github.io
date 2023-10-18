//adding element to a page
// const body = document.body
// body.append("Hellow World")
// // body.appendChild("Hellow World");
// const div= document.createElement("div")
// div.innerText = "Hello World"
// div.textContent = "Hellow world2"
// body.append(div)

// function getEven(arr) {
//   let newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// let result = getEven([10, 23, 4, 5, 89]);
// console.log(result);
///////////

// function isPalindrome(str) {
//   let newStr = str.split("").reverse().join("");
//   if (str === newStr) {
//     return true;
//   }
// }
// console.log(isPalindrome("level"));

// function objLoop(obj) {
//   for (key of obj) {
//     console.log("key value:", key, obj[key]);
//   }
// }
// objLoop({ a: 1, b: "apple" });

// function objLoop(obj) {
//   for (let key in obj) {
//     console.log("key value:", key, obj[key]);
//   }
// }
// objLoop({ a: 1, b: "apple" });

// function costructKeyArray(obj) {
//   let arr = [];
//   for (let key in obj) {
//     arr.push(obj[key]);
//   }
//   return arr;
// }

// function singleElement(arr) {
//   let num = arr[i];
//   let myArr = [];
//   for (i = 0; arr.length; i++) {
//     for (j = i; j < arr.length; j++) {
//       if (arr[i] !== arr[j]) {
//         newArr.push(arr[i]);
//       }
//     }
//     return newArr;
//   }
// }
// console.log(singleElement([3, 4, 5, 6, 4]));

////
// class work

// function getTypeArr(array){
//   let myArr = [];
//   for(let ele of array){
//     myArr.push(typeof ele)
//   }return myArr;
// }
// let array = [1, "apple", [1,2], {a:1, b:2}];
// console.log(getTypeArr(array))

// function findLength(arr) {
//   let newArray = [];
//   for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "object") {
//       newArray.push(arr[i].toString().length);
      
//     } else {
//       newArray.push(Array.isArray(arr[i])?arr[i].length:0);
      
//     }
//   }
//   return newArray;
// }
// let givenArr = findLength([1, "apple", true, [1, 3], { a: 4, b: 5 }]);
// console.log(givenArr);

// console.log(findLength([1, "apple", true, [1, 3], { a: 4, b: 5 }]));
// console.log(findLength([1, "apple", true, [1, 3], { a: 4, b: 5 }]));
// console.log(findLength([1, "apple", true, [1, 3], { a: 4, b: 5 }]));
// console.log(findLength([1, "apple", true, [1, 3], { a: 4, b: 5 }]));


function swap(){
  let nameText = document.getElementById("nameText")
  let alias = document.getElementById("alias");


  // console.log(nameText, alias);
  let nameValue = nameText.value
  nameText.value = alias.value;
  alias.value = nameValue;


}


function sum(){
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;
  let num3 = document.getElementById("result")
  num3.value = parseInt(num1) + parseInt(num2);

//  let num3 = parseInt(num1) - parseInt(num2);
//  let num3 = parseInt(num1) * parseInt(num2);
//  let num3 = parseInt(num1) / parseInt(num2);


  //innerHTML
  console.log(document.getElementById("bel"))


}

let myP = document.getElementById("myId");
console.log(myP)
console.log(myP.innerHTML)
myP.innerHTML = myP.innerHTML + " changed from code"
console.log(myP.innerHTML)

//changing images
let myImg = document.getElementById("myflower");
console.log(myImg.innerHTML);
myImg.src = "flower2.jpeg"

//changing ancor links
let myAnc = document.querySelector("#mya");
console.log(myAnc);
myAnc.href= "https://www.apple.com"
console.log(myAnc)

let mypar = document.querySelector("#myParagraph");
console.log(mypar);
mypar.p= "This is the added paragraph."
console.log(mypar);





