var points= [];

var x,y;

function showCoords(event)
{
    x = event.clientX;
    y = event.clientY;
    var coor = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("board").innerHTML = coor;
}

function draw(x,y)
{
    let point = {};
    point.pozx = x;
    point.pozy = y;
    point.getball=document.createElement("div");
    point.getball.style.width = 5 + 'px';
    point.getball.style.height = 5 + 'px';
    point.getball.style.borderRadius = '50%';
    point.getball.style.position = 'absolute';
    point.getball.style.border = 1 + 'px';
    point.getball.style.border = 'solid';
    point.getball.style.color = "black";
    point.getball.style.background = 'black';
    point.getball.style.borderColor = 'black';
    point.getball.style.left = point.pozx+'px';
    point.getball.style.top = point.pozy+'px';
    document.getElementById("divboard").appendChild(point.getball);
    return point;
}

function clearCoor()
{
    document.getElementById("board").innerHTML = "";
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
    if(mouseDown==1)
    {
        points.push(draw(x,y));
    }
}

setInterval(update,1);