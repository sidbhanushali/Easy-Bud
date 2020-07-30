
// SELECT CHART ELEMENT
const chart = document.querySelector(".chart");

// CREATE CANVAS ELEMMENT
const canvas = document.createElement("canvas");
canvas.width = 50;
canvas.height = 50;

// APPEND CANVAS TO CHART ELEMENT
chart.appendChild(canvas);

// TO DRAW ON CANVAS, WE NEED TO GET CONTEXT OF CANVAS
const canvasContext = canvas.getContext("2d");

// CHANGE THE LINE WIDTH
canvasContext.lineWidth = 8;

// CIRCLE RADIUS
const R = 20;

function drawCircle(color, ratio, anticlockwise){

    canvasContext.strokeStyle = color;
    canvasContext.beginPath();
    canvasContext.arc( canvas.width/2, canvas.height/2, R, 0, ratio * 2 * Math.PI, anticlockwise);
    canvasContext.stroke();
}

function updateChart( income, outcome){
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);

    let ratio = income / (income+outcome);

    drawCircle("#FFFFFF", - ratio, true);
    drawCircle("#F0624D", 1 - ratio, false);
}