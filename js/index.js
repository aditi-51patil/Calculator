let listOfInputs = [];
const ops = ["+", "-", "/", "*"];
const inValidNum = /[+-\/*]+/;
const btn = document.querySelectorAll("button");
const output = document.querySelector(".final");
const dynamicOutput = document.querySelector(".dynamic");
const addBtnListeners = () => {
  btn.forEach((btns) => {
    btns.addEventListener("click", rippleAndBtnPress);
  });
};
inputElem = (val) => {
  if (ops.includes(val) && ops.includes(listOfInputs.at(-1))) {
    listOfInputs.pop();
    listOfInputs.push(val);
    output.innerText = listOfInputs.join("");
  } else if (val == "=") {
    console.log(listOfInputs.join(""));
    output.innerText = eval(listOfInputs.join(""));
  } else if (val == "DEL") {
    listOfInputs = [];
    output.innerText = "";
    dynamicOutput.innerText = "";
  } else {
    listOfInputs.push(val);
    output.innerText = listOfInputs.join("");
  }
  if (Number(val) || val == "0") {
    dynamicOutput.innerText = eval(listOfInputs.join(""));
  }
  console.log(listOfInputs);
};
const rippleAndBtnPress = (event) => {
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  event.target.appendChild(ripple);
  let x = event.clientX - event.target.offsetLeft;
  let y = event.clientY - event.target.offsetTop;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  setTimeout(() => {
    ripple.remove();
  }, 300);
  inputElem(event.target.innerText);
};
addBtnListeners();
const handleKyeboard = (event) => {
  console.log(event);
  if (
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "="]
      .concat(ops)
      .includes(event.key)
  ) {
    inputElem(event.key);
  } else if (event.key == "Enter") {
    inputElem("=");
  } else if (event.key == "c") {
    inputElem("DEL");
  }
};
document.addEventListener("keypress", handleKyeboard);
