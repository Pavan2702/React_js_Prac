
const speakbtn =document.querySelector("#playBtn");

const query = document.querySelector("#text")
speakbtn.addEventListener("click",playSpeech)

function playSpeech() {
    const speech = new SpeechSynthesisUtterance(query?.value)
    speechSynthesis.speak(speech);    
}