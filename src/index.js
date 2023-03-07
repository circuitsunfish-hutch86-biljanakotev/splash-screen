const startBtn = document.getElementById("start-btn");
const svgImg = document.getElementById("svg-img");
const audio = new Audio("https://vgmsite.com/soundtracks/donkey-kong-arcade/rtchzzqw/03%20Stage%20Opening%201.mp3");

startBtn.addEventListener("click", function () {
  startBtn.style.display = "none";
  svgImg.style.display = "block";
  audio.play();
});

function playAudio() {
  audio.play();
}

// function deleteDK() {
//   svgImg.style.display = "none";
// }

// audio.onended = deleteDK;
