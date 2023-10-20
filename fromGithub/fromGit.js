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
checkLabel2.textContent = "The Country";

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
  radLabel1,
  radInput1,
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
visDiv.style.backgroundColor= "lightblue"
let visInput = document.querySelector("input")
visInput.style.visibility = "visible"
visInput.style.width="200px"
let visLab = document.createElement("label");
visLab.innerHTML= "Visibility";

visDiv.append(visLab, visInput);
document.body.append(visDiv)


function changeVisib(){

  currentVisib = visInput.style.visibility;
  if(currentVisib==="visible"){
    visInput.style.visibility="hidden"
  }else if(currentVisib==="hidden"){
    visInput.style.visibility="visible"
  }
};