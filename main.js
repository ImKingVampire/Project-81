var canvas = document.getElementById("canvoos");
var ctx =canvas.getContext("2d");

/*ctx.beginpath();
ctx.strokeStyle="grey";
ctx.lineWidth=4;
ctx.rect(150,143,430,200);
ctx.stroke();*/

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(200,160,45,0,360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(310,160,45,0,360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(420,160,45,0,360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(250,210,45,0,360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(370,210,45,0,360);
ctx.stroke();