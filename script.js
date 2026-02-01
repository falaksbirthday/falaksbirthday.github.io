const intro = document.getElementById("introScreen");
const main = document.getElementById("mainContent");
const startBtn = document.getElementById("startBtn");
const giftBox = document.getElementById("giftBox");
const finalMessage = document.getElementById("finalMessage");

// OPTIONAL: Change the name here
document.getElementById("namePlaceholder").innerText = "Your Friend";

startBtn.onclick = () => {
    intro.classList.add("hidden");
    main.classList.remove("hidden");
    startBalloons();
};

function startBalloons() {
    const colors = ["🎈","🎉","✨","🎊"];
    for (let i = 0; i < 30; i++) {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.innerText = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDuration = 3 + Math.random() * 5 + "s";
        document.querySelector(".balloons").appendChild(balloon);
    }
}

giftBox.onclick = () => {
    finalMessage.classList.remove("hidden");
    giftBox.innerText = "🎉";
};

// Star constellation logic
const stars = document.querySelectorAll('.star');
const loveBar = document.getElementById('loveBar');
let starCount = 0;

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    if(star.classList.contains('active')) return;

    star.classList.add('active');
    starCount++;

    loveBar.style.width = (starCount / stars.length) * 100 + '%';
    spawnFloat('✨');

    if(starCount === stars.length){
      setTimeout(() => nextScreen(2), 900);
    }
  });
});

