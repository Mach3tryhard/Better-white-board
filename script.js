var lines= [];
var x1,y1,x2,y2;
var pencolor='black';
var size=5;
var inboard=false;

function showCoords(event)
{
    x1 = event.clientX;
    y1 = event.clientY;
    var coor = "X coords: " + x1 + ", Y coords: " + y1;
    document.getElementById("board").innerHTML = coor;
    inboard=true;
}

function draw()
{
    let line = {};
    line.pozx1 = x1;
    line.pozy2 = y1;
    line.pozx2 = x2;
    line.pozy2 = y2;
    const canvas = document.querySelector('#canvas');

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    // set line stroke and line width
    ctx.strokeStyle = pencolor;
    ctx.lineWidth = size;
    // draw a red line
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    return line;
}

function clearCoor()
{
    document.getElementById("board").innerHTML = "";
    inboard=false;
}

var mouseDown=0;

window.onmousedown = function()
{ 
    ++mouseDown;
}
window.onmouseup = function()
{
    --mouseDown;
}

function update()
{
    if(mouseDown==1 && inboard==true && pencolor!='white')
    {
        lines.push(draw(x1, y1,x2,y2));
        x2 = x1;
        y2 = y1;
    }
}

setInterval(update,0);