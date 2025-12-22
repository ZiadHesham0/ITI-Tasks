var canvas = document.getElementById("circleCanvas");
var ctx = canvas.getContext('2d');
var myInput = document.getElementsByTagName("input")[0]
var btn = document.getElementsByTagName("button")[0];



function draw() {
    ctx.clearRect(0,0,1200,700)
    for (let i = 0; i < 40; i++) {
        var x = (Math.random() * 1200);
        var y = (Math.random() * 700);
        var radius = (Math.random ()*70);
        console.log('helloo');
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.lineWidth = 2;
        ctx.strokeStyle = myInput.value;
        ctx.stroke();
    }
}


// draw();
btn.addEventListener("click", draw)


// myInput.addEventListener("click", function () {
//     // console.log(myInput.value);
//     // ctx.fillStyle = myInput.value;
//     draw();
// })















// ctx.fillRect(20 , 80 , 100 , 100)
// ctx.beginPath();
// ctx.moveTo(10,10);
// ctx.lineTo(300,100);
// ctx.closePath();
// ctx.stroke();
// ctx.strokeStyle= myInput.value;
// ctx.lineWidth = 3;
// ctx.strokeRect(20 , 80 , 400 , 100)
// ctx.strokeStyle = 'blue';  // Border color
// ctx.lineWidth = 3;         // Border thickness
// ctx.strokeRect(200, 50, 100, 80);