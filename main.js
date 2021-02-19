var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var mouseevent="empty";
var lastpositionx,lastpositiony;
var color="black";
var width="1";
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
    color=document.getElementById("color").value;
    width=document.getElementById("width_of_line").value;
    mouseevent="mousedown";
}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
    currentx = e.clientX - canvas.offsetLeft;
    currenty = e.clientY - canvas.offsetTop;
    if(mouseevent=="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color; 
        ctx.lineWidth = width;
        ctx.moveTo(lastpositionx,lastpositiony);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }
    lastpositionx=currentx;
    lastpositiony=currenty; 
}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {
    mouseevent="mouseUP";
}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {
    mouseevent="mouseleave";
}
function clear_area() {
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}