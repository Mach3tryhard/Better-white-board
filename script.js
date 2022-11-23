var lines = [];
var x, y;
var pencolor = 'black';
var size = 5;
var erase_type = "normal";
var inboard;
{
    const canvas = document.querySelector('#canvas');
    if (canvas) {
        canvas.width = screen.width;
        canvas.height = screen.height;
    }
}
function change_color(color) {
    pencolor = color;
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
        lines.push(ctx);

    }
    function continue_line() {
        const ctx = lines[lines.length - 1];
        ctx.beginPath();
        ctx.lineTo(x, y);
        draw(x, y, xp, yp);
        xp = x;
        yp = y;
    }

    function draw(a, b, c, d) {
        const canvas = document.querySelector('#canvas');
        if (!canvas.getContext) {
            return;
        }
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(a, b);
        ctx.lineTo(c, d);
        ctx.lineWidth = size;
        ctx.lineCap = "butt";
        ctx.setLineDash([2]);
        ctx.strokeStyle = pencolor;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        ctx.stroke();
        ctx.stroke();
    }
}
function erase_line(i) {

}
function clearCoor() {
    document.getElementById("board").innerHTML = "";
    inboard = false;
}

var mouseDown = 0;
window.onmousedown = function () {
    if (inboard && window.event.button == 0) {
        ++mouseDown;
        new_line();
    }
}
window.onmouseup = function () {
    mouseDown = 0;
}

function update() {
    if (mouseDown == 1 && pencolor != 'white' && inboard) {
        continue_line();
    }
}

setInterval(update, 1);
//bezier curve
//only left click
//make erase