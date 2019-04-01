var canvas;
let r = 244;
let g =  202;
let b = 17;
var changeColor = false;
function setup() { 
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
} 

function draw() {  
    if (mouseIsPressed) {
      drawTrail(mouseX, mouseY, pmouseX, pmouseY, mouseIsPressed);  
    }
    else {
        trail = [];
    }
}

var trail = [];
function drawTrail(x, y, px, py) {
    background(r, g, b); 
    let speed = abs(x - px) + abs(y - py);
    var nextItem = [x+10, y+20, speed, speed];
    trail.push(nextItem);
    if (trail.length == 100) {
        trail.splice(0, 1);
    }
    for (var i=0; i<trail.length; i++) {
        stroke(speed);
        stroke(r, g, b);
        print(trail);
        var item = trail[i];
        rect(item[0], item[1], item[2], item[3])
    }        
}

function mousePressed() {
    r = random(255);
    g = random(255);
    b = random(255);
    background(r, g, b); 
}


