const fName   = document.getElementById("fName");
const lName   = document.getElementById("lName");
const country = document.getElementById("country");
const score   = document.getElementById("score");
const button  = document.getElementById("button");
const removeChilds = document.getElementById("circle");
const addFive = document.getElementById("increment");
const desFive = document.getElementById("decrement");

const err = document.getElementById("alert");

const parent = document.getElementsByClassName("about")[0];


button.addEventListener("click",() => {

  if(fName.value === "" || lName.value === "" || country.value === "" || score.value === ""){
    err.innerText = "All fields are required";
    err.style.color = "red";
    return;
  }

  const child = document.createElement("div");
  child.setAttribute("class","container");

  const div = document.createElement("div");
  div.setAttribute("class","one");
  // -----------------
  const h3 = document.createElement("h3");
  h3.setAttribute("class","name");
  h3.innerText = fName.value+" "+lName.value;
  const p = document.createElement("p");
  p.innerText = new Date();
  p.style.fontSize = "10px"
  p.style.fontWeight = "bolder";
  div.style.gap = "5px"
  div.append(h3);
  div.append(p);

  const two = document.createElement("div");
  two.setAttribute("class","two");
  two.innerText = country.value;

  const three = document.createElement("div");
  three.setAttribute("class","three");
  three.innerText = score.value;

  const four = document.createElement("div");
  four.setAttribute("class","four");

  const circle = document.createElement("button");
  circle.setAttribute("id","circle");
  circle.innerText = "🗑️";

  const increment = document.createElement("button");
  increment.setAttribute("id","increment");
  increment.innerText = "+5";

  const decrement = document.createElement("button");
  decrement.setAttribute("id","decrement");
  decrement.innerText = "-5";
  four.append(circle,increment,decrement);

  four.append(circle)
  four.append(increment)
  four.append(decrement)
  child.append(div,two,three,four);
  
  parent.append(child);

  circle.addEventListener("click",() => {
    parent.removeChild(child)
  })

  increment.addEventListener("click", () => {
    let num = three.innerText;
    num = Number(num);
    three.innerText = num+5;
  })

  decrement.addEventListener("click", () => {
    let num = three.innerText;
    num = Number(num);
    three.innerText = num-5;
  })

})
