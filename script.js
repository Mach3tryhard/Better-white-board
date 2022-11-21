var points= [];

var x,y;
var pencolor='black';
var size=5;
var inboard=false;

function showCoords(event)
{
    x = event.clientX;
    y = event.clientY;
    var coor = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("board").innerHTML = coor;
    inboard=true;
}

function draw(x,y)
{
    let point = {};
    point.pozx = x;
    point.pozy = y;
    point.getball=document.createElement("div");
    point.getball.style.width = size + 'px';
    point.getball.style.height = size + 'px';
    point.getball.style.borderRadius = '50%';
    point.getball.style.position = 'absolute';
    point.getball.style.border = 1 + 'px';
    point.getball.style.border = 'solid';
    point.getball.style.color = pencolor;
    point.getball.style.background = pencolor;
    point.getball.style.borderColor = pencolor;
    point.getball.style.left = point.pozx+'px';
    point.getball.style.top = point.pozy+'px';
    document.getElementById("divboard").appendChild(point.getball);
    return point;
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
        points.push(draw(x,y));
    }
    if(pencolor=='white')
    {
        for(var i=0;i<points.length;i++)
        {
            var difx=points[i].pozx-x;
            if(difx<0)difx=-difx;
            var dify=points[i].pozy-y;
            if(dify<0)dify=-dify;
            if(difx<size && dify<size)
            {
                points[i].getball.remove();
            }
        }
    }
}

setInterval(update,0);