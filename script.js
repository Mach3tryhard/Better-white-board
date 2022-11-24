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
        xp = x;
        yp = y;
        ctx.moveTo(x, y);
        lines.push(ctx);

    }
    function continue_line() {
        const ctx = lines[lines.length - 1];
        ctx.beginPath();
        let a = x;
        let b = y;
        ctx.lineTo(x, y);
        draw(xp, yp, a, b);
        xp = a;
        yp = b;
    }

    function draw(x1, y1, x2, y2) {
        const canvas = document.querySelector('#canvas');
        if (!canvas.getContext) {
            return;
        }
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = size;
        ctx.lineCap = "butt";
        ctx.setLineDash([2]);
        ctx.strokeStyle = pencolor;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
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
function m_pressed() {
    if (inboard && window.event.button == 0) {
        new_line();
        if (pencolor != 'white') {
            update=setInterval(continue_line, 1);
        }
    }
}

document.addEventListener('mousedown', m_pressed);
document.addEventListener('mouseup', function () { clearInterval(update);});
//make erase