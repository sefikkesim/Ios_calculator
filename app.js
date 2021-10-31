const currentDisplayField = document.querySelector(".current-display");
const previousDisplayField = document.querySelector(".previous-display");
const buttonsContainer = document.querySelector(".buttons-container");
buttonsContainer.addEventListener("click", e =>{
  if (e.target.classList.contains("number") && currentDisplayField.innerText.length <8) {
    if ((currentDisplayField.innerText == "" && e.target.classList.contains("number-0")) || currentDisplayField.innerText.split("")[0] == 0) {
      currentDisplayField.innerText = e.target.innerText;
    }    
    else{
      currentDisplayField.innerText += e.target.innerText;
    }
  }
  if (e.target.classList.contains("decimal") && !currentDisplayField.innerText.includes(",")) {
    currentDisplayField.innerText += e.target.innerText;
  }
  //*******// if (currentDisplayField.innerText.includes("0") && currentDisplayField.innerText.includes(",") ) {
  //   currentDisplayField.innerText += e.target.innerText;
  // }
  if (e.target.classList.contains("operator")) {
    const operator = e.target.innerText;
    switch (operator) {
      case "+":
        if (currentDisplayField.innerText !== "") {
          previousDisplayField.innerText = `${currentDisplayField.innerText} ${operator}`;
          currentDisplayField.innerText = ""
        }
        break;
        case "-":
          if (currentDisplayField.innerText !== "") {
            previousDisplayField.innerText = `${currentDisplayField.innerText} ${operator}`;
            currentDisplayField.innerText = ""
          }
          break;
        case "x":
          if (currentDisplayField.innerText !== "") {
            previousDisplayField.innerText = `${currentDisplayField.innerText} ${operator}`;
            currentDisplayField.innerText = ""
          }
          break;
        case "÷":
          if (currentDisplayField.innerText !== "") {
            previousDisplayField.innerText = `${currentDisplayField.innerText} ${operator}`;
            currentDisplayField.innerText = ""
          }
        case "=":
          if (currentDisplayField.innerText !== "") {
            if (previousDisplayField.innerText.includes("+")) {
              const currentNumber = Number(currentDisplayField.innerText);
              const previousNumber = Number(previousDisplayField.innerText.split(" ")[0]);
              currentDisplayField.innerText = previousNumber + currentNumber;
              previousDisplayField.innerText = ""
            }
              if (previousDisplayField.innerText.includes("-")) {
                const currentNumber = Number(currentDisplayField.innerText);
                const previousNumber = Number(previousDisplayField.innerText.split(" ")[0]);
                currentDisplayField.innerText = previousNumber - currentNumber;
                previousDisplayField.innerText = ""
              }
                if (previousDisplayField.innerText.includes("÷")) {
                const currentNumber = Number(currentDisplayField.innerText);
                const previousNumber = Number(previousDisplayField.innerText.split(" ")[0]);
                if (currentNumber == 0) {
                  currentDisplayField.innerText = "HATA";
                }
                else{
                  currentDisplayField.innerText = previousNumber / currentNumber;
                }
                previousDisplayField.innerText = "";
                }
                if (previousDisplayField.innerText.includes("x")) {
                  const currentNumber = Number(currentDisplayField.innerText);
                  const previousNumber = Number(previousDisplayField.innerText.split(" ")[0]);
                  currentDisplayField.innerText = previousNumber * currentNumber;
                  previousDisplayField.innerText = "";
                }
              }
              break;
      default:
        break;
    }
  }
  if ( e.target.classList.contains("function")){
    const funct = e.target.innerText;
    switch (funct){
      case "AC":
        currentDisplayField.innerText = "";
        previousDisplayField.innerText = "";
        break;
        case "±":
          if (!currentDisplayField.innerText.includes("-")){
            currentDisplayField.prepend("-");
          }else{
            currentDisplayField.innerText = currentDisplayField.innerText.split("-")[1];
          }
          break;
          case "%":
            if (currentDisplayField.innerText !== ""){
              currentDisplayField.innerText = Number (currentDisplayField.innerText) / 100;
            }
            break;
    }
  }
})

function celar() {
  if ( currentDisplayField.innerText  !== "" && previousDisplayField.innerText !== ""){
    let ac = document.querySelector(".ac");
    ac.innerText = "C"
    currentDisplayField.innerText = "" ;
  }
  
  
}

let hourEl = document.querySelector(".hour");
let minuteEl = document.querySelector(".minute");
// // Set up the time
const updateTime = () => {
 const currentTime = new Date();

 let currentHour = currentTime.getHours();
const currentMinute = currentTime.getMinutes();

if (currentHour > 12) {
  currentHour -= 12;
 }
hourEl.textContent = currentHour.toString();
 minuteEl.textContent = currentMinute.toString().padStart(2, '0');
} 
setInterval(updateTime, 1000);
 updateTime();