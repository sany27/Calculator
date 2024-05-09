let AllBtns = document.querySelectorAll(".btns");
let displayBox = document.getElementById("display-screen");
let onBtn = document.getElementById("on");

// Disable on button
AllBtns.forEach(function (offBtn) {
  offBtn.disabled = true;
  offBtn.style.opacity = 0.5;
});

//  Enable on button
let flag = 0;
onBtn.addEventListener("click", function () {
  if (!flag) {
    on.textContent = "OFF";
    on.style.backgroundColor="red";

    AllBtns.forEach(function (on) {
      on.disabled = false;
      on.style.opacity = 1;

    });
    flag=1;
  }
  else{
    on.textContent = "ON";
    on.style.backgroundColor="green";
    AllBtns.forEach(function (of) {
      of.disabled = true;
      of.style.opacity = 0.4;
      
    });
    displayBox.textContent="";
    flag=0;
  }
});
// all clear button
let allClear = document.getElementById("all-clear");
allClear.addEventListener("click", function () {
  displayBox.textContent = "";
});
//  clear button
let clear = document.getElementById("clear");
clear.addEventListener("click", function (event) {
  displayBox.innerText = displayBox.innerText.slice(0, -1);
});

// displaying the numbers
AllBtns.forEach(function (e) {
  e.addEventListener("click", () => {
    displayBox.textContent += e.value;
  });
});
//  equals-to button
let result = document.querySelector(".equal-to");
result.addEventListener("click", function () {
  let display_expression = displayBox.textContent;
  displayBox.textContent = eval(display_expression);
  displayBox.style.fontWeight = "800";
});


AllBtns.forEach(function (e) {
    e.addEventListener("keypress", (event) => {
        if(event.keyCode === 13){
            event.preventDefault();
            let display_expression = displayBox.textContent;
            displayBox.textContent = eval(display_expression);
            displayBox.style.fontWeight = "200";
        }
    });
  });