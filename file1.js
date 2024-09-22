tx = window.innerWidth;
ty = window.innerHeight;

function randomColor() {
  return `rgb(${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)})`;
}

const getcanvas = document.getElementsByClassName("canva")[0];
const draw = getcanvas.getContext("2d");
getcanvas.height = ty;
getcanvas.width = tx;
class Balls {
  constructor() {
    this.color = randomColor();
    this.radius = Math.round(Math.random() * 50);
    this.coordinatex = this.radius + Math.random() * (tx - 2 * this.radius);
    this.coordinatey = this.radius + Math.random() * (ty - 2 * this.radius);
    this.changex = Math.random() * 7; //fixed value stores into the variables
    this.changey = Math.random() * 7;
  }
  createBall() {
    Math.random() * 2;
    draw.beginPath();
    draw.fillStyle = this.color;
    draw.arc(this.coordinatex, this.coordinatey, this.radius, 0, 2 * Math.PI);
    draw.fill();
  }
}
let strBalls = [];
for (let i = 1; i < 70; i++) {
  strBalls.push(new Balls());
}
function drawBalls() {
  draw.clearRect(0, 0, tx, ty); //clears the window
  strBalls.forEach((inp) => {
    inp.createBall();
    // console.log(inp.radius);
    inp.coordinatex = inp.coordinatex + inp.changex;
    inp.coordinatey = inp.coordinatey + inp.changey;
    if (inp.coordinatey + inp.radius >= ty) {
      inp.changey = -inp.changey;
    } else if (inp.coordinatey - inp.radius <= 0) {
      inp.changey = -inp.changey;
    }
    if (inp.coordinatex + inp.radius >= tx) {
      inp.changex = -inp.changex;
    } else if (inp.coordinatex - inp.radius <= 0) {
      inp.changex = -inp.changex;
    }
  });
  requestAnimationFrame(drawBalls);
}

drawBalls();

// inp.coordinatex = inp.coordinatex + Math.random()*10;

getbutton = document.getElementsByClassName("button")[0];
getbutton.addEventListener("click", show);
function show() {
  if (getcanvas.style.display === "block") {
    getcanvas.style.display = "none";
  } else {
    getcanvas.style.display = "block";
  }
}
