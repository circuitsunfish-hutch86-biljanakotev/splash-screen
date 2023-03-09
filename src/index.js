
const startBtn = document.getElementById("start-btn");
const svgImg = document.getElementById("svg-img");
const winnerBanner = document.getElementById("winner");
const audio = new Audio("https://vgmsite.com/soundtracks/donkey-kong-arcade/rtchzzqw/03%20Stage%20Opening%201.mp3");
const audio2 = new Audio ("https://vgmsite.com/soundtracks/donkey-kong-arcade/tqjjbsbi/14%20Unknown.mp3")




// click event listener control 

startBtn.addEventListener("click", function () {
  startBtn.style.display = "none";
  
  svgImg.style.display = "block";
  audio.play();

});

// audio play handler

function playAudio() {
  audio.play();
}

// animate DK on a path

function animate(){
  gsap.registerPlugin(MotionPathPlugin);
  gsap.to(svgImg,{duration:2, motionPath:[{x:200, y:50}, {x:400, y:0}, {x:450, y:-200}, {x:500, y:-300},{x:550,y:-350}], ease:Power2.easeOut, scale:1.5});
  gsap.to(svgImg, 2 / 2, {y:-350, ease:Bounce.easeOut, delay:2 / 4});
}
animate()

// delete DK after music tract end

function deleteDK() {

  svgImg.style.opacity = "0";
    // Confetti handler
  audio2.play()
  winnerBanner.style.display = "block";

  let total = 275;
  let w = window.innerWidth;
  let h = window.innerHeight;
  
  //  generate randomness
  
  function random(min, max) {
    return min + Math.floor(Math.random() * (max - min));
  }
  
  function maxRandom(max) {
    return Math.random() * max
  }
  
  //  generate confetti
  
  function generate() {
    for (var i= 0; i < total; i++) {
      $(".container").append("<div class='confetti'></div>");
      gsap.set($(".confetti")[i],{
        x: maxRandom (w),
        y: random(h* -2,0),
        opacity:1,
        scale:maxRandom(0.5) + 0.5,
        backgroundColor: "hsl("+ random(0,360) + ", 50%,50%)",
      });

       // animate confetti function below
  
      animate1($(".confetti")[i]);
    }
    
  }

  // animate confetti
  function animate1(elem) {
  gsap.to(elem,{
    duration:maxRandom(5) + 4,
    y: h + 50,
    ease: "none",
    repeat: -1,
    delay: -1,
  });
  
  gsap.to(elem,{
    duration:maxRandom(5) + 2,
    x: " += 80",
    repeat: -1,
    yoyo: true,
    ease:"sine.inOut",
  });
  
  gsap.to(elem,{
    duration:maxRandom(5) + 2,
    scaleX: 0.2,
    rotation: maxRandom(360),
    repeat : -1,
    yoyo: true,
    ease:"sine.inOut",
  });
  }
  
  generate();
  
  window.onresize = function () {
  Array.from($(".confetti")).forEach((e) => e.remove());
  w = window.innerWidth;
  h = window.innerHeight;
  generate();
  };
  
  }

audio.onended = deleteDK;










