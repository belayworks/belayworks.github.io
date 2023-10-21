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

function swap() {
  let nameText = document.getElementById("nameText");
  let alias = document.getElementById("alias");

  // console.log(nameText, alias);
  let nameValue = nameText.value;
  nameText.value = alias.value;
  alias.value = nameValue;
}

function sum() {
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;
  let num3 = document.getElementById("result");
  num3.value = parseInt(num1) + parseInt(num2);

  //  let num3 = parseInt(num1) - parseInt(num2);
  //  let num3 = parseInt(num1) * parseInt(num2);
  //  let num3 = parseInt(num1) / parseInt(num2);

  //innerHTML
  console.log(document.getElementById("bel"));
}

let myP = document.getElementById("myId");
console.log(myP);
console.log(myP.innerHTML);
myP.innerHTML = myP.innerHTML + " changed from code";
console.log(myP.innerHTML);

// <!-- Change Text of Div,P,textInput,link  -->
let divWithTed = document.querySelector("#myNewParagraph");
// divWithTed.textContent = "<b>this is with Teddy!</>"
divWithTed.innerHTML = "<u>this is with Teddy!</u>";

// var.innerHTML = "";

// var.href= ""
// var.src= ""
// // textarea
// var.value=""
// // input
// var.value = ''
let newTA = document.querySelector("#myTextArea");

newTA.value = "description";
///////
let divted2 = document.createElement("div");
divted2;

//changing images
let myImg = document.getElementById("myflower");
console.log(myImg.innerHTML);
myImg.src = "flower2.jpeg";
myImg.style.width = "50px";

// //changing ancor links
// let myAnc = document.querySelector("#mya");
// console.log(myAnc);
// myAnc.href= "https://www.apple.com"
// console.log(myAnc)

// let mypar = document.querySelector("#myParagraph");
// console.log(mypar);
// mypar.p= "This is the added paragraph."
// console.log(mypar);

////////////

// function appendText(num){
//   let myText = document.querySelector("textarea");
//   myText.value = myText.value + num

// }
// function execute() {
//   let myTextAreaValue = document.querySelector("textarea").value;
//   //  mtTextArea = 10;
//   let lhs = 0;
//   rhs = 0;
//   op = "";
//   for (let i = 0; i < myTextAreaValue.length; i++) {
//     if (i === 0) {
//       lhs = parseInt(myTextAreaValue[0]);
//     } else if (myTextAreaValue[i] == "+" || myTextAreaValue[i] == "-") {
//       op = myTextAreaValue[i];
//     } else {
//       rhs = parseInt(myTextAreaValue[i]);
//     }
//   }
//   let result = op === "+" ? lhs + rhs : lhs - rhs;
//   document.querySelector("textarea").value = result;
// }

//  let num1 = document.querySelector('execute').value;
//  let num2 = document.querySelector("execute").value;
//  let num3 = document.querySelector('execute');
//  num3.value = parseInt(num1) + parseInt(num2);

//////////
// create and add content
// div
// function createAdd(){
let mySec = document.getElementsByClassName("tedclass")[0];

let newDIV = document.createElement("div");
newDIV.textContent = "selam Ye hagere lij";
let newDIV2 = document.createElement("label");
newDIV2.innerHTML = "<b> THIS IS IT!</b>";

let myNewImg = document.querySelector("img");
myNewImg.src = "./flower2.jpeg";
let myNewCkeckBox = document.createElement("input");
myNewCkeckBox.type = "checkbox";
let myLabel = document.createElement("label");
myLabel.innerHTML = "this is checkbox";
let myRadio = document.createElement("input");
// myRadio.type ="radio";
myRadio.setAttribute("type", "radio");

//////break lines
let newLine1 = document.createElement("br");
newLine1.setAttribute("texContent", "</br>");

let newLine2 = document.createElement("br");
newLine2.setAttribute("texContent", "</br>");

let newLine3 = document.createElement("br");
newLine3.setAttribute("texContent", "</br>");

let newLine4 = document.createElement("br");
newLine4.setAttribute("texContent", "</br>");
let newLine5 = document.createElement("br");
newLine5.setAttribute("texContent", "</br>");
let newLine6 = document.createElement("br");
newLine6.setAttribute("texContent", "</br>");
let newLine7 = document.createElement("br");
newLine7.setAttribute("texContent", "</br>");
////////////
let myRadLabel = document.createElement("label");
myRadLabel.innerHTML = "this is radio";
let myButton = document.createElement("button");
myButton.textContent = "TheButton";
let mylink = document.createElement("a");
mylink.href = "https://www.apple.com";
mylink.textContent = "apple";

let mytextAr = document.createElement("textarea");
mytextAr.placeholder = "new textarea";

let Table = document.createElement("table");
Table.style.borderCollapse = "collapse";

let hRow = document.createElement("tr");

let th1 = document.createElement("th");
th1.textContent = "Header1";
th1.style.border = "1px solid black";
th1.style.backgroundColor ="lightblue"
let th2 = document.createElement("th");
th2.textContent = "Header2";
th2.style.backgroundColor = "lightblue";
th2.style.border = "1px solid black";
let fRow = document.createElement("tr");

let r1col1 = document.createElement("td");
r1col1.textContent = "r1columnOne";
r1col1.style.border = "1px solid black"
let r1col2 = document.createElement("td");
r1col2.textContent = "r1columnTwo";
r1col2.style.border = "1px solid black"

let sRow = document.createElement("tr");
let r2col1 = document.createElement("td");
r2col1.textContent = "r2columnOne";
r2col1.style.border = "1px solid black";
let r2col2 = document.createElement("td");
r2col2.textContent = "r2columnTwo";
r2col2.style.border = "1px solid black";
fRow.append(r1col1, r1col2);
sRow.append(r2col1, r2col2);
hRow.append(th1, th2);
Table.append(hRow, fRow, sRow);

///ordered list

let oList = document.createElement("ol");

let li1 = document.createElement("li");
li1.innerHTML = "this is element 1";

let li2 = document.createElement("li");
li2.innerHTML = "this is element 2";

let li3 = document.createElement("li");
li3.innerHTML = "this is element 3";
let li4 = document.createElement("li");
li4.innerHTML = "this is element 4";

oList.append(li1, li2, li3, li4);

/////ordered list

let uList = document.createElement("ul");

let liA = document.createElement("li");
liA.innerHTML = "this is element A";

let liB = document.createElement("li");
liB.innerHTML = "this is element B";

let liC = document.createElement("li");
liC.innerHTML = "this is element C";
let liD = document.createElement("li");
liD.innerHTML = "this is element D";

uList.append(liA, liB, liC, liD);

let addToExisting = document.querySelector(".addText");
let newTex = document.createTextNode("this is an added content");
addToExisting.append(newTex);

// mySec.appendChild(newDIV)
// mySec.appendChild("newDIV2")
mySec.append(
  newDIV,
  "SOMETHING",
  newDIV2,
  newLine2,
  myNewCkeckBox,
  myLabel,
  newLine1,
  newLine3,
  myRadio,
  myRadLabel,
  newLine7,
  myButton,
  newLine4,
  mylink,
  newLine5,
  mytextAr,
  newLine6,
  Table,
  oList,
  uList,
  addToExisting
);

// }


let myInput = document.querySelector("#newInput");
let clearText = document.querySelector("#clearIt");
function clearCon() { 

myInput.value= ""
}

// let myInput = document.querySelector("#newInput");
// let clearText = document.querySelector("#clearIt");
// clearText.addEventListener("click", function () {
//   myInput.value = "";
// });

mySec.append(clearText, myInput);



/////from teachers gitHub
window.onload = function (){
  let myDIV5= document.createElement("div")
  myDIV5.innerHTML = '<label>Name</label><input type="text" ';
  document.body.append(myDIV5)
} 


///////////
// let newList = document.createElement("ul");
// let myCkBox1 = document.createElement("input");
// myCkBox1.value = "fruits"
// // myCkBox1.type = "checkbox";
// myCkBox1.setAttribute("type", "checkbox")
// let ckLabe1l = document.createElement("label");
// ckLabel1.innerHTML = "checkbox1";

// let myCkBox2 = document.createElement("input");
// myCkBox2.type = "checkbox";
// let ckLabe2 = document.createElement("label");
// ckLabe2.innerHTML = "checkbox2";

// let myCkBox3 = document.createElement("input");
// myCkBox3.type = "checkbox";
// let ckLabel3 = document.createElement("label");
// ckLabel3.innerHTML = "checkbox3";

// let myCkBox4 = document.createElement("input");
// myCkBox4.type = "checkbox";
// let ckLabel4 = document.createElement("label");
// ckLabe4.innerHTML = "checkbox4";
// newList.append(myCkBox1, ckLabe1l)
// mySec.after(newList)
// document.body.append(mySec)
  // , myCkBox2, ckLabe2,myCkBox3, ckLabel3, myCkBox4, ckLabel4)

  ////////////////

let textDIV = document.querySelector(".textDIV")
let textAreaDiv = document.querySelector("#moveItTop");
// let textBut = document.querySelector("#moveTopBut");

console.log(textDIV)
function moveIt(){
  let prependUp=textAreaDiv.value;
  let newLine = document.createElement("br")
  textDIV.before(prependUp + " ");
  
  // textDIV.textContent= textAreaDiv.value;
  textAreaDiv.value = "";
}
document.body.append(textDIV)




////////////////
// sample exam


// let newList = document.createElement("ul");
// let newListEle1 = document.createElement("li");
// newListEle1.innerHTML = "hello world";
// let newListEle2 = document.createElement("li");
// newListEle2.innerHTML = "hello country";


// newList.append(newListEle1, newListEle2);
// document.body.append(newList)


////////add new element vto the list

let addToOl = document.getElementById("newOl");
let newListEle4 = document.createElement("li");
newListEle4.innerHTML = "hello my city";
console.log(newListEle4);
addToOl.append(newListEle4);
// my.append(addToOl);
// document.body(mySec)


///add row to existing table

let exTable = document.querySelector("#tabId");
let NewRow = document.createElement("tr")
let colE= document.createElement("td");
colE.innerHTML= "COLE"
colE.style.border= "1px solid black"
let colF = document.createElement("td");
colF.innerHTML = "COLF";
colF.style.border = "1px solid black";
NewRow.append(colE, colF);
exTable.append(NewRow)
mySec.append(exTable)