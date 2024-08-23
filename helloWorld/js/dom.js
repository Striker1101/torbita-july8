const element = document.body.firstChild.nextSibling.firstChild;
const listFive = document.getElementById("listFive");
const list = document.getElementsByClassName("list");
const li = document.getElementsByTagName("li");

//general
const listTwo = document.querySelector(".listTwo");
const listThree = document.querySelector("#listThree");
console.log(listTwo, listThree);

const allListClass = document.querySelectorAll(".list");
console.log(allListClass);

console.log(listFive.textContent);
console.log(listFive.getAttribute("data-score"));
listFive.setAttribute("data-text", "learn setAtt");

//.nextSibling.firstChild;

//using style property
listFive.style.color = "red";

//using cssText property
list[0].style.cssText = "color:blue;";

//using setAttribute
list[2].setAttribute("style", "color:green");

//creating and appending element/node
const sixLi = document.createElement("li");
sixLi.textContent = "six";
sixLi.style.cssText = "color: yellow;";

document.getElementById("lists").appendChild(sixLi);

//events handing
const btn = document.getElementById("btn");

function handleClick() {
  console.log("this button was clicked");
  window.location.href = "../html/box_model.html";
}
//using addEventListener
btn.addEventListener("click", handleClick);

//using on event
btn.onclick = handleClick;
