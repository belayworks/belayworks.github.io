// // getElementsById();
// const title = document.getElementById("main-heading")
// console.log(title)

// // getElementsByClassName();
// const listItems = document.getElementsByClassName("list-items");
// console.log(listItems)

// // getElementsByTagName();
// const listItems2 = document.getElementsByTagName("li");
// console.log(listItems2);


// // querySelector();
// const container2 = document.querySelector('div')
// console.log(container2)

// // querySelectorAll();
// const containerAll = document.querySelectorAll("div");
// console.log(containerAll);


// const title = document.querySelector('#main')
// function getEven(arr){
//   let newArr = []
//   for(i=0; i<arr.lenght; i++){
//     if(arr[i]%2===0){
//     newArr.push(arr[i]);
//     }

//   }
//   return newArr
// }console.log(getEven([10,23,4,5,89]))


// document.querySelector('h1').innerHTML= "Good Bye"

document.getElementsByTagName("li");
document.getElementsByTagName("li")[2].style.color= "green";
document.getElementsByTagName("li").length;
document.getElementsByClassName("btn")


document.querySelector(".list a" );


document.querySelector("list .item");
document.querySelectorAll("#list .item");

document.querySelector("ul li a").style.color = "red";



document.querySelector("button").style.backgroundColor = "yellow"
document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible");
document.querySelector("button").classList.toggle("invisible");
document.querySelector("button").classList.toggle("invisible");

document.querySelector("h1").classList.add("huge");

document.querySelector("h1").innerHTML = "<em> Good bye<em>";

document.querySelector("a").getAttribute("href");

document.querySelector("a").setAttribute("href", "https://www.bing.com");

