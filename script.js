// ============================
// تایپ عاشقانه
// ============================
const message = "تو قشنگ‌ترین اتفاق زندگی منی... تا ابد عاشقتم قلب من ❤️";
let i = 0;
function typeWriter() {
  if (i < message.length) {
    document.getElementById("text").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// ============================
// موزیک بی‌کلام
// ============================
const music = document.getElementById("music");
document.getElementById("playMusicBtn").onclick = () => {
  if(music.paused){ music.play(); } else { music.pause(); }
}

// ============================
// قلب‌های شناور
// ============================
const heartsContainer = document.getElementById("hearts");
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";
  heart.style.width = 10 + Math.random() * 20 + "px";
  heart.style.height = heart.style.width;
  heart.style.background = ["red","pink","white"][Math.floor(Math.random()*3)];
  heartsContainer.appendChild(heart);
  setTimeout(() => heartsContainer.removeChild(heart), 5000);
}
setInterval(createHeart, 300);

// ============================
// سورپرایز: قلب → درخت
// ============================
document.getElementById("surpriseBtn").onclick = () => {
  createFallingHeart(() => drawHeartTree());
}

function createFallingHeart(callback) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = window.innerWidth/2 - 15 + "px";
  heart.style.top = "-50px";
  heart.style.width = "30px";
  heart.style.height = "30px";
  heart.style.background = "red";
  heartsContainer.appendChild(heart);

  let top = -50;
  const fall = setInterval(() => {
    top += 5;
    heart.style.top = top + "px";
    if(top >= window.innerHeight/2) {
      clearInterval(fall);
      heartsContainer.removeChild(heart);
      callback();
    }
  }, 20);
}

// ============================
// کشیدن درخت قلبی و متن
// ============================
function drawHeartTree() {
  const canvas = document.getElementById("treeCanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");

  // ساقه
  ctx.fillStyle = "#8B4513";
  ctx.fillRect(canvas.width/2 -5, canvas.height/2, 10, 150);

  // قلب‌ها
  ctx.fillStyle = "red";
  function drawHeart(x, y, size){
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Math.PI/4);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(size,0);
    ctx.arc(0, -size/2, size/2, 0, Math.PI, true);
    ctx.arc(-size, -size/2, size/2, 0, Math.PI, true);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  const heartPositions = [
    [canvas.width/2, canvas.height/2 - 20],
    [canvas.width/2 - 30, canvas.height/2 - 50],
    [canvas.width/2 + 30, canvas.height/2 - 50],
    [canvas.width/2, canvas.height/2 - 80],
    [canvas.width/2 - 40, canvas.height/2 - 110],
    [canvas.width/2 + 40, canvas.height/2 - 110]
  ];
  heartPositions.forEach(pos => drawHeart(pos[0], pos[1], 30));

  // متن روی درخت
  ctx.fillStyle = "white";
  ctx.font = "40px Tahoma";
  ctx.textAlign = "center";
  ctx.fillText("Happy Valentine’s Day", canvas.width/2, canvas.height/2 - 150);
}
