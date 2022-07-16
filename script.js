const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 2;

let isDraw = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    if (!isDraw) return; 
    ctx.beginPath()
   
    // starts from
    ctx.moveTo(lastX, lastY)

    // ends to
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    lastX = e.offsetX;
    lastY = e.offsetY;

    hue = (hue + 1) % 361;
    ctx.lineWidth++;
    ctx.lineWidth = (ctx.lineWidth % 200);
    console.log(ctx.lineWidth);
}

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mousedown", (e) => {
    lastX = e.offsetX;
    lastY = e.offsetY; 
    isDraw = true;
});
canvas.addEventListener("mouseup", () => (isDraw = false));
canvas.addEventListener("mouseout", () => (isDraw = false));
