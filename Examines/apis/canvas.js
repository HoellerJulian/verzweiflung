const canvas = document.getElementById('drawingCanvas')
const ctx = canvas.getContext('2d')

let isDrawing = false
ctx.strokeStyle = 'black'

// Function to start drawing
canvas.addEventListener('mousedown', (ev) => {
  isDrawing = true
  ctx.beginPath() // Start a new path
  ctx.moveTo(ev.offsetX, ev.offsetY) // Move to the starting point
})

// Function to draw as the mouse moves
canvas.addEventListener('mousemove', (ev) => {
  if (isDrawing) {
    ctx.lineTo(ev.offsetX, ev.offsetY) // Draw a line to the new position
    ctx.stroke() // Render the line
  }
})

// Function to stop drawing
canvas.addEventListener('mouseup', () => {
  isDrawing = false
})

// Function to stop drawing if the mouse leaves the canvas
canvas.addEventListener('mouseleave', () => {
  isDrawing = false
})

// Function to change stroke color based on selected radio button
document.querySelectorAll('input[name="color"]').forEach((radio) => {
  radio.addEventListener('change', (ev) => {
    ctx.strokeStyle = ev.target.value
  })
})

function drawRect(){
    /* xstart,ystart,width,height*/
    //ctx.strokeRect(10,10, 150,100);
    ctx.beginPath();
    ctx.fillRect(10,10, 150,100);
    ctx.stroke();
}

function drawCircle(){
    /*xstart,ystart,radius,startangle,endangle,(optional counterclock)*/
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawPath(){
    ctx.beginPath();
    ctx.moveTo(110, 110);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

document.getElementById("drawrect").addEventListener("click",drawRect)
document.getElementById("drawcircle").addEventListener("click",drawCircle)
document.getElementById("drawpath").addEventListener("click",drawPath)