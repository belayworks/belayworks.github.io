let myForm = document.createElement("form");

let fLabel = document.createElement("label");
fLabel.innerHTML = "<h1> Country</h1>";

let fName = document.createElement("select");
fName.value = "name";
fName.text = "name";

let opt1 = document.createElement("option");
opt1.innerHTML = "ASMERA";
let opt2 = document.createElement("option");
opt2.innerHTML = "ADDIS";
let opt3 = document.createElement("option");
opt3.innerHTML = "NIROBI";
/////////////////////
let mName = document.createElement("select");
mName.setAttribute("multiple", "multiple name");
// mName.value = "multiple_name";
// mName.text = "Multiple Name"
let opt4 = document.createElement("option");
opt4.innerHTML = "ASMERA";
let opt5 = document.createElement("option");
opt5.innerHTML = "ADDIS";
let opt6 = document.createElement("option");
opt6.innerHTML = "NIROBI";

fName.append(opt1, opt2, opt3);
mName.append(opt4, opt5, opt6);
myForm.append(fLabel, fName, mName);
document.body.appendChild(myForm);

// radio
let radInput1 = document.createElement("input");
radInput1.type = "radio";
radInput1.name = "state";
// radInput1.setAttribute("name", "state");

let radLabel1 = document.createElement("label");
radLabel1.textContent = "Virginia";

let radInput2 = document.createElement("input");
radInput2.type = "radio";
radInput2.setAttribute("name", "state");

let radLabel2 = document.createElement("label");
radLabel2.textContent = " Iowa";

//
let checkInput1 = document.createElement("input");
checkInput1.type = "checkbox";
let checkLabel1 = document.createElement("label");
checkLabel1.textContent = "The Country";

let checkInput2 = document.createElement("input");
checkInput2.type = "checkbox";
let checkLabel2 = document.createElement("label");
checkLabel2.textContent = "The Globe";

///////////
let textAr = document.createElement("textarea");
textAr.placeholder = "your comment here";
let textArLabel = document.createElement("label");
textArLabel.innerHTML = "Comments";
//
let brLine1 = document.createElement("br");
// brLine1.innerHTML= "<br>";

let brLine2 = document.createElement("br");
// brLine2.innerHTML = "<br>";

let brLine3 = document.createElement("br");
// brLine3.innerHTML = "<br>";

let brLine4 = document.createElement("br");
// brLine4.innerHTML= "<br>";

let brLine5 = document.createElement("br");
// brLine5.innerHTML = "<br>";

let brLine7 = document.createElement("br");
// brLine7.innerHTML = "<br>";
let brLine8 = document.createElement("br");

////img
let theImg = document.createElement("img");

theImg.setAttribute("src", "./flower.jpg");
theImg.style.width = "100px";
let imgLabel = document.createElement("label");
imgLabel.innerHTML = "flower";
// function changecolor(){

// }

document.body.append(
  radInput1,
  radLabel1,
  brLine1,
  radInput2,
  radLabel2,
  brLine2,
  checkInput1,
  checkLabel1,
  brLine3,
  checkInput2,
  checkLabel2,
  brLine4,
  brLine8,
  textArLabel,
  textAr,
  brLine5,
  brLine7,
  imgLabel,
  theImg
);

//////////////////////////////
let colorDiv = document.querySelector(".colorchan");
colorDiv.style.backgroundColor = "lightblue";
let chooseColor = document.createElement("select");

let colorOpt1 = document.createElement("option");
colorOpt1.value = "dark";
colorOpt1.innerHTML = "Dark";
let colorOpt2 = document.createElement("option");
colorOpt2.value = "light";
colorOpt2.innerHTML = "Light";
let bananaPar = document.createElement("p");
bananaPar.innerHTML = "Bananas are Yellow in color";

chooseColor.append(colorOpt1, colorOpt2);

colorDiv.append(bananaPar);
colorDiv.prepend(chooseColor);

document.body.after(colorDiv);

function changecolor() {
  let selectedColor = chooseColor.value;
  if (selectedColor === "dark") {
    bananaPar.style.backgroundColor = "black";
    bananaPar.style.color = "lightblue";
  } else if (selectedColor === "light") {
    bananaPar.style.backgroundColor = "yellow";
    bananaPar.style.color = "black";
  }
}

//////////////
let dispDiv = document.querySelector("#display");
dispDiv.style.backgroundColor = "lightblue";

let disTop = document.createElement("label");
disTop.textContent = "Display";
let dispPar = document.createElement("p");
dispPar.style.visibility = "visible";
dispPar.innerHTML = "Bananas are yellow in color";

dispDiv.append(disTop, dispPar);
document.body.append(dispDiv);

function changeDisplay() {
  let visibility = dispPar.style.visibility;

  if (visibility === "visible") {
    dispPar.style.visibility = "hidden";
  } else if (visibility === "hidden") {
    dispPar.style.visibility = "visible";
  }
}

let visDiv = document.querySelector("#visDIV");
visDiv.style.backgroundColor = "lightblue";
let visInput = document.querySelector("input");
visInput.style.visibility = "visible";
visInput.style.width = "200px";
let visLab = document.createElement("label");
visLab.innerHTML = "Visibility";

visDiv.append(visLab, visInput);
document.body.append(visDiv);

function changeVisib() {
  currentVisib = visInput.style.visibility;
  if (currentVisib === "visible") {
    visInput.style.visibility = "hidden";
  } else if (currentVisib === "hidden") {
    visInput.style.visibility = "visible";
  }
}

/////display part of a page conditionally
//
let pageSel = document.createElement("select");
// let but1 = document.getElementById("li1But");
// let but2 = document.getElementById("li2But");
let dispLabel = document.createElement("label");
dispLabel.innerHTML = "Scriptures";

let opPage1 = document.createElement("option");
opPage1.innerHTML = "Upanishads";
let opPage2 = document.createElement("option");
opPage2.innerHTML = "Vedas";

let divLi1 = document.createElement("div");
let ch1 = document.createElement("input");
ch1.type = "checkbox";
let lCh1 = document.createElement("label");
lCh1.innerHTML = "Aiterya";
let ch2 = document.createElement("input");
ch2.type = "checkbox";
let lCh2 = document.createElement("label");
lCh2.innerHTML = "Brihadarankya";
let ch3 = document.createElement("input");
ch3.type = "checkbox";
let lCh3 = document.createElement("label");
lCh3.innerHTML = "AiteryaChandogya";
let ch4 = document.createElement("input");
ch4.type = "checkbox";
let lCh4 = document.createElement("label");
lCh4.innerHTML = "Mandukya";

////
let divLi2 = document.createElement("div");

let chA = document.createElement("input");
chA.type = "checkbox";
let lChA = document.createElement("label");
lChA.innerHTML = "Rig";
let chB = document.createElement("input");
chB.type = "checkbox";
let lChB = document.createElement("label");
lChB.innerHTML = "Yajur";
let chC = document.createElement("input");
chC.type = "checkbox";
let lChC = document.createElement("label");
lChC.innerHTML = "Adarvana";
let chD = document.createElement("input");
chD.type = "checkbox";
let lChD = document.createElement("label");
lChD.innerHTML = "Sama";
let divAll = document.createElement("div");


let showBut = document.getElementById("li1But");
let subBut = document.getElementById("li2But");
let hrLi = document.getElementById("hrpg");
divLi2.append(chA, lChA, chB, lChB, chC, lChC, chD, lChD);
divLi1.append(ch1, lCh1, ch2, lCh2, ch3, lCh3, ch4, lCh4);
divAll.append(divLi1, divLi2);
pageSel.append(opPage1, opPage2);
document.body.append(dispLabel, pageSel, showBut, divAll, hrLi, subBut);

function showOpion() {
  let selectedOption = pageSel.value;
  if (selectedOption === "Upanishads") {
    divLi1.style.display = "block";
    divLi2.style.display = "none";
  } else if (selectedOption === "Vedas") {
    divLi1.style.display = "none";
    divLi2.style.display = "block";
  }
}

function hideContent() {
  let selectedOption = pageSel.value;
  // pageSel.visibility = "visible";
  if (selectedOption === "Upanishads" || selectedOption === "Vedas") {
    divLi1.style.display = "none";
    divLi2.style.display = "none";
  }
}

// checked unchecked
let thisDiv = document.createElement("div");
thisDiv.style.backgroundColor = "lightyellow"
let radInpA = document.createElement("input");
radInpA.type = "radio";
let rdLabA = document.createElement("label");
rdLabA.innerHTML = " Hello";
let radInpB = document.createElement("input");
radInpB.type = "radio";
let rdLabB = document.createElement("label");
rdLabB.innerHTML = "hi";
let chInp = document.createElement("input");
chInp.type = "checkbox";
let chLab = document.createElement("label");
chLab.innerHTML = "checkbox";

let inpBUt = document.getElementById("unckBut");
inpBUt.style.backgroundColor="lightyellow"


thisDiv.append(radInpA, rdLabA, radInpB, rdLabB, chInp, chLab);
document.body.append(thisDiv, inpBUt);

function uncheckIt() {
//   if (radInpA.checked || radInpB.checked || chInp.checked) {
//     radInpA.checked = false;
//     radInpB.checked = false;
//     chInp.checked = false;
//   }
// }

let allInputs=document.getElementsByTagName("input");
for(let element of allInputs ){
  element.checked=false;
}
}


// create/sort/delete
let delDIV1 = document.createElement("div");
let delDIV2 = document.createElement("div");

let imgOne = document.createElement("img");
imgOne.src = "./flower2.jpeg";
imgOne.style.width = "50px";
imgOne.style.height = "50px";
let pOne = document.createElement("p");
pOne.innerHTML = "Maharishi";
let pTwo = document.createElement("p");
pTwo.innerHTML = "Mahesh";

let imgTwo = document.createElement("img");
imgTwo.src = "./flower.jpg"
imgTwo.style.width = "50px";
imgTwo.style.height = "50px";


let pThree = document.createElement("p");
pThree.innerHTML = "John";
let pFour = document.createElement("p");
pFour.innerHTML = "Doe";

let sortIt = document.getElementById("sortIt");
let del1 = document.getElementById("deleteI");
let del2 = document.getElementById("deleteII");
let delDIVAll= document.createElement("div");
delDIVAll.style.display = "flex";
delDIVAll.style.backgroundColor = "lightblue"

delDIV1.append(imgOne, pOne, pTwo, del1);
delDIV2.append(imgTwo, pThree, pFour,del2)
delDIVAll.append(sortIt,delDIV1, delDIV2)
document.body.append(delDIVAll)

function deleteOne(){
  if(delDIV1.style.display!=="none"){
    delDIV1.style.display="none"
  }
}
function deleteTwo() {
  if (delDIV2.style.display !== "none") {
    delDIV2.style.display = "none";
  }
}
function showAll() {
  if (delDIV1.style.display === "none"|| delDIV2.style.display==="none") {
   delDIV1.style.display = "block";
   delDIV2.style.display = "block";
  }
}



