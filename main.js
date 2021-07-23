var mouseEvent = "empty";

canvas = docment.getElementById("myCanvas");
ctx = canvas.getContext("2d");


color = "red";
width_of_line = 2;

canvas.addEventlistener("mousedown", my_mousedown);

function my_mousedown(e){
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
radius = document.getElementById("radius").value;
mouseEvent = "mouseDown";
}


function my_mousemove(e){
current_position_of_mouse_x = e.clientX - offsetLeft;
current_position_of_mouse_y = e.clientY - offsetTop;

if(mouseEvent == "mouseDown"){
console.log("the current postion of x and y is" );
console.log("X = " + current_position_of_mouse_x + "Y = " + current_position_of_mouse_y);

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2* Math.PI);
ctx.stroke();
}
}