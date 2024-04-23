const text = document.getElementById("convert");
const convertbtn = document.getElementById("convertbtn");

convertbtn.addEventListener('click',function(){
    const speechSynth = window.speechSynthesis;
    const enteredText = text.value;
    const error = document.querySelector('.error');

    if (!speechSynth.speaking && !enteredText.trim().length) {
        error.textContent = `Nothing to Convert! 
        Please enter text in the text area.`;
    }

    if(!speechSynth.speaking && enteredText.trim().length){
        error.textContent = "";
        const newUtter = new SpeechSynthesisUtterance(enteredText);
        speechSynth.speak(newUtter);
        convertbtn.textContent = "Sound is Playing...";
    }

    setTimeout(() => {
        convertbtn.textContent = "Play Converted Sound";
    },5000);

});
