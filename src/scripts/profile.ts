let textArea = document.getElementById("textbox"); // Getting DOM element
let characterCounter = document.getElementById("char_count"); // Getting DOM element
let sendButton = document.getElementById("sendButton"); // Getting DOM element
const maxNumOfChars = 140;

const getCharactersCount = (textArea: any) => {
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
  let {, numOfEnteredChars} = getCharactersCount(textArea);
  if(numOfEnteredChars > 0 && sendButton != null){
    sendButton.disabled = false;
  }
}

textArea?.addEventListener("input", disableUnusedButton);
textArea?.addEventListener("input", countCharacters);
