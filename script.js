var lines= [];
var x, y;
var pencolor='black';
var size=5;
var erase_type = "normal";
var inboard;
function change_color(color) {
    pencolor = color;
    if (pencolor == "white")
        size = 2 * size;
}
function showCoords(event)
{
    x = event.pageX;
    y = event.pageY;
    var coor = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("board").innerHTML = coor;
    inboard = true;
}
{
    let xp, yp;
    function new_line() {
        const canvas = document.querySelector('#canvas');
        if (!canvas.getContext) {
            return;
        }
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(x, y);
        xp = x;
        yp = y;
        ctx.lineWidth = size;
        ctx.strokeStyle = pencolor;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        lines.push(ctx);

    }
    function continue_line() {
        const ctx = lines[lines.length - 1];
        ctx.lineTo(x, y);
        draw(x, y, xp, yp);
        xp = x;
        yp = y;
    }

    function draw(a,b,c,d) {
        const canvas = document.querySelector('#canvas');
        if (!canvas.getContext) {
            return;
        }
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(a, b);
        ctx.lineTo(c, d);
        ctx.lineWidth = size;
        ctx.strokeStyle = pencolor;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.stroke();
    }
}
function erase_line(i)
{
    
}
function clearCoor()
{
    document.getElementById("board").innerHTML = "";
    inboard=false;
}

var mouseDown=0;
window.onmousedown = function()
{
    if (inboard && window.event.button == 0) {
        ++mouseDown;
        new_line();
    }
 }
window.onmouseup = function()
{
    mouseDown=0;
}

function update()
{
    console.log(lines);
    if (mouseDown == 1 && pencolor != 'white'&& inboard) {
        continue_line();
    }
}

setInterval(update, 1);
//bezier curve
//only left click
//make erase