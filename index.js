let screen = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let screenValue = "";
// console.log(screen);
// console.log(buttons);

for (item of buttons) {
  // console.log(k);
  item.addEventListener("click", (event) => {
    buttonText = event.target.innerText;
    // console.log(event);
    // console.log(buttonText);

    if (buttonText == "AC") {
      screenValue = "";
      screen.value = '0';
    } 
    else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } 
    else if (buttonText == "←") {

      let value1 = document.getElementById("display").value;
      let result = value1.slice(0, -1);
      screen.value = result;
      screenValue = "";
    }
    else {

      if (screenValue.length >= 7) {
        alert("Sry Length Exceeded!");
      }
      else if (screenValue == "" && isSymbol(buttonText)) {
          alert("Sry invalid input says SYMBOL");
      }
      else if(screenValue !='' && isSymbol(screenValue.slice(-1)) && isSymbol(buttonText))
        {
          alert("Sry matching symbols");
        }
      
      else if (screenValue.includes('.') && buttonText == ".") {
        alert("Sry valid input");
      }
      else {
        screenValue += buttonText;
        screen.value = screenValue;
      }
    }
  });
}
function isSymbol(a) {
  if (a == "%" || a == "*" || a == "-" || a == "+" || a == "/") {
    return true;
  }
  return false;
}
