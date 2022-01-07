var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d');
var polygon = [];
let complete;

function drawing(polygon) {
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.moveTo(polygon[0], polygon[1]);
    if (polygon.length === 2) {
        ctx.fillRect(polygon[0], polygon[1], 2, 2);
    }
    for(item = 2; item < polygon.length-1; item += 2 ){
        ctx.lineTo( polygon[item] , polygon[item+1] )
    }
    ctx.stroke();
}

function setPoints(e){
    const { offsetX, offsetY  } = e;
    polygon.push(offsetX, offsetY )
    if (complete) {
        polygon = [];
        complete = false;
    }
    drawing(polygon);
}

function setReset() {
    polygon = [];
    ctx.beginPath();
    drawing(polygon)
    complete = false;
    ctx.clearRect(0, 0, polygon.width, polygon.height);
}

function setComplete() {
    polygon.push(polygon[0],polygon[1]);
    drawing(polygon);
    complete = true;
}

canvas.addEventListener('click', (e) => setPoints(e));