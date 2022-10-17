let textArea = document.getElementById("textbox"); // Getting DOM element
let characterCounter = document.getElementById("char_count"); // Getting DOM element
let sendButton = document.getElementById("sendButton"); // Getting DOM element
const maxNumOfChars = 140;

const getCharactersCount = () => {
  let numOfEnteredChars = textArea.value.length;
  let counter = maxNumOfChars - numOfEnteredChars;
  return {counter, numOfEnteredChars}
}

const countCharacters = () => {
  if(textArea != null && characterCounter != null){
    let {counter, numOfEnteredChars} = getCharactersCount(textArea);

    if (counter < 0) {
      characterCounter.style.color = "rgb(255, 0, 0)";
      characterCounter.textContent = "-" +  Math.abs(numOfEnteredChars - maxNumOfChars).toString();
    } else if (counter < 40) {
      characterCounter.style.color = "rgb(255, 200, 0)";
      characterCounter.textContent = Math.abs(numOfEnteredChars - maxNumOfChars).toString();
    } else {
      characterCounter.style.color = "black";
      characterCounter.textContent = Math.abs(numOfEnteredChars - maxNumOfChars).toString();
    }
  }
}

const disableUnusedButton = () => {
  sendButton.disabled = true;
  let {_ , numOfEnteredChars} = getCharactersCount(textArea);
  if(numOfEnteredChars > 0 && sendButton != null){
    sendButton.disabled = false;
  }
}

// ----------------------------------

let textArea02 = document.getElementById("textbox02"); 
let characterCounter02 = document.getElementById("char_count02");
let sendButton02 = document.getElementById("sendButton02");
const maxNumOfChars02 = 140;

const getCharactersCount02 = () => {
  let numOfEnteredChars = textArea02.value.length;
  let counter = maxNumOfChars02 - numOfEnteredChars;
  return {counter, numOfEnteredChars}
}

const countCharacters02 = () => {
  if(textArea02 != null && characterCounter02 != null){
    let {counter, numOfEnteredChars} = getCharactersCount(textArea02);

    if (counter < 0) {
      characterCounter02.style.color = "rgb(255, 0, 0)";
      characterCounter02.textContent = "-" +  Math.abs(numOfEnteredChars - maxNumOfChars02).toString();
    } else if (counter < 40) {
      characterCounter02.style.color = "rgb(255, 200, 0)";
      characterCounter02.textContent = Math.abs(numOfEnteredChars - maxNumOfChars02).toString();
    } else {
      characterCounter02.style.color = "black";
      characterCounter02.textContent = Math.abs(numOfEnteredChars - maxNumOfChars02).toString();
    }
  }
}

const disableUnusedButton02 = () => {
  sendButton02.disabled = true;
  let {_ , numOfEnteredChars} = getCharactersCount(textArea02);
  if(numOfEnteredChars > 0 && sendButton != null){
    sendButton02.disabled = false;
  }
}

textArea?.addEventListener("input", disableUnusedButton);
textArea?.addEventListener("input", countCharacters);

textArea02?.addEventListener("input", disableUnusedButton02);
textArea02?.addEventListener("input", countCharacters02);
