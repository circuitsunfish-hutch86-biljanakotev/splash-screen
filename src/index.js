
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

// animate donkey kong on a path
function animate(){
  gsap.registerPlugin(MotionPathPlugin);
  gsap.to(svgImg,{duration:2, motionPath:[{x:200, y:50}, {x:400, y:0}, {x:500, y:-200}, {x:600, y:-300},{x:800,y:-350}], ease: "power1.inOut", scale:1.5});
  
}
animate()







