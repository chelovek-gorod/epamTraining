/*************
 *
 *    JS
 *
 ************/

 "use strict";

let c_numbers = 3;
let c_arr = [];
let ctx_arr = [];
for (let i = 1; i <= c_numbers; i++) {
    c_arr[i] = document.getElementById("c_"+i);
    ctx_arr[i] = c_arr[i].getContext('2d');
    c_arr[i].width = 500;
    c_arr[i].height = 500;
}

// CANVAS 1

// head
ctx_arr[1].lineWidth = 8;
ctx_arr[1].strokeStyle = '#0000ff';
ctx_arr[1].fillStyle = '#00ffe7';
ctx_arr[1].beginPath();
ctx_arr[1].arc(250, 325, 125, 0, Math.PI * 2, true);
ctx_arr[1].stroke();
ctx_arr[1].fill();
ctx_arr[1].closePath();

// mouth
ctx_arr[1].lineWidth = 4;
ctx_arr[1].beginPath();
ctx_arr[1].moveTo(300,400);
ctx_arr[1].bezierCurveTo(325, 375, 225, 350, 200, 375);
ctx_arr[1].bezierCurveTo(175, 400, 275, 425, 300, 400);
ctx_arr[1].stroke();
ctx_arr[1].closePath();

// nose
ctx_arr[1].beginPath();
ctx_arr[1].moveTo(250, 350);
ctx_arr[1].lineTo(225, 350);
ctx_arr[1].lineTo(250, 300);
ctx_arr[1].stroke();
ctx_arr[1].closePath();

// eyes
ctx_arr[1].beginPath();
ctx_arr[1].moveTo(200,300);
ctx_arr[1].bezierCurveTo(200, 275, 150, 275, 150, 300);
ctx_arr[1].bezierCurveTo(150, 325, 200, 325, 200, 300);
ctx_arr[1].stroke();
ctx_arr[1].closePath();

ctx_arr[1].beginPath();
ctx_arr[1].moveTo(325,300);
ctx_arr[1].bezierCurveTo(325, 275, 275, 275, 275, 300);
ctx_arr[1].bezierCurveTo(275, 325, 325, 325, 325, 300);
ctx_arr[1].stroke();
ctx_arr[1].closePath();

ctx_arr[1].fillStyle = '#0000ff';
ctx_arr[1].beginPath();
ctx_arr[1].arc(170, 300, 12, 0.75 * Math.PI, Math.PI * 1.25, true);
ctx_arr[1].fill();
ctx_arr[1].closePath();

ctx_arr[1].beginPath();
ctx_arr[1].arc(295, 300, 12, 0.75 * Math.PI, Math.PI * 1.25, true);
ctx_arr[1].fill();
ctx_arr[1].closePath();

// hat
ctx_arr[1].lineWidth = 8;
ctx_arr[1].strokeStyle = '#000000';
ctx_arr[1].fillStyle = '#003c58';
ctx_arr[1].beginPath();
ctx_arr[1].moveTo(400,225);
ctx_arr[1].bezierCurveTo(400, 200, 100, 200, 100, 225);
ctx_arr[1].bezierCurveTo(100, 250, 400, 250, 400, 225);
ctx_arr[1].stroke();
ctx_arr[1].fill();
ctx_arr[1].closePath();

ctx_arr[1].beginPath();
ctx_arr[1].moveTo(350,210);
ctx_arr[1].bezierCurveTo(350, 230, 150, 230, 150, 210);
ctx_arr[1].lineTo(150, 75);
ctx_arr[1].lineTo(350, 75);
ctx_arr[1].lineTo(350, 210);
ctx_arr[1].stroke();
ctx_arr[1].fill();
ctx_arr[1].closePath();

ctx_arr[1].beginPath();
ctx_arr[1].moveTo(350,75);
ctx_arr[1].bezierCurveTo(350, 95, 150, 95, 150, 75);
ctx_arr[1].bezierCurveTo(150, 55, 350, 55, 350, 75);
ctx_arr[1].stroke();
ctx_arr[1].fill();
ctx_arr[1].closePath();

// CANVAS 2

// wheels
ctx_arr[2].lineWidth = 8;
ctx_arr[2].strokeStyle = '#0000ff';
ctx_arr[2].fillStyle = '#00ffe7';

ctx_arr[2].beginPath();
ctx_arr[2].arc(125, 325, 75, 0, Math.PI * 2, true);
ctx_arr[2].stroke();
ctx_arr[2].fill();
ctx_arr[2].closePath();

ctx_arr[2].beginPath();
ctx_arr[2].arc(375, 325, 75, 0, Math.PI * 2, true);
ctx_arr[2].stroke();
ctx_arr[2].fill();
ctx_arr[2].closePath();

// frame
ctx_arr[2].lineWidth = 4;

ctx_arr[2].beginPath();
ctx_arr[2].moveTo(125, 325);
ctx_arr[2].lineTo(250, 325);
ctx_arr[2].lineTo(350, 225);
ctx_arr[2].lineTo(225, 225);
ctx_arr[2].lineTo(125, 325);

ctx_arr[2].moveTo(250, 325);
ctx_arr[2].lineTo(220, 200);

ctx_arr[2].moveTo(195, 200);
ctx_arr[2].lineTo(245, 200);

ctx_arr[2].stroke();
ctx_arr[2].closePath();

// pedals
ctx_arr[2].beginPath();
ctx_arr[2].arc(250, 325, 25, 0, Math.PI * 2, true);
ctx_arr[2].stroke();
ctx_arr[2].closePath();

ctx_arr[2].beginPath();
ctx_arr[2].moveTo(290, 365);
ctx_arr[2].lineTo(267, 342);
ctx_arr[2].moveTo(232, 307);
ctx_arr[2].lineTo(210, 285);
ctx_arr[2].stroke();
ctx_arr[2].closePath();

// rudder
ctx_arr[2].beginPath();
ctx_arr[2].moveTo(375, 325);
ctx_arr[2].lineTo(350, 200);
ctx_arr[2].lineTo(312, 200);
ctx_arr[2].moveTo(350, 200);
ctx_arr[2].lineTo(375, 175);
ctx_arr[2].stroke();
ctx_arr[2].closePath();

// CANVAS 3
ctx_arr[3].lineWidth = 8;
ctx_arr[3].strokeStyle = '#000000';
ctx_arr[3].fillStyle = '#462500';

// box
ctx_arr[3].strokeRect(100, 250, 300, 240);
ctx_arr[3].fillRect(100, 250, 300, 240);

// roof
ctx_arr[3].beginPath();
ctx_arr[3].moveTo(250, 248);
ctx_arr[3].lineTo(100, 248);
ctx_arr[3].lineTo(250, 48);
ctx_arr[3].lineTo(400, 248);
ctx_arr[3].lineTo(250, 248);
ctx_arr[3].stroke();
ctx_arr[3].fill();
ctx_arr[3].closePath();

// furnace tube
ctx_arr[3].lineWidth = 4;
ctx_arr[3].fillRect(300, 75, 50, 125);
ctx_arr[3].beginPath();
ctx_arr[3].moveTo(300, 75);
ctx_arr[3].lineTo(300, 200);
ctx_arr[3].stroke();
ctx_arr[3].closePath();
ctx_arr[3].beginPath();
ctx_arr[3].moveTo(350, 75);
ctx_arr[3].lineTo(350, 200);
ctx_arr[3].stroke();
ctx_arr[3].closePath();
ctx_arr[3].lineWidth = 8;
ctx_arr[3].beginPath();
ctx_arr[3].moveTo(350,75);
ctx_arr[3].bezierCurveTo(350, 85, 300, 85, 300, 75);
ctx_arr[3].bezierCurveTo(300, 65, 350, 65, 350, 75);
ctx_arr[3].stroke();
ctx_arr[3].fill();
ctx_arr[3].closePath();

// door
ctx_arr[3].lineWidth = 4;
ctx_arr[3].beginPath();
ctx_arr[3].moveTo(130, 490);
ctx_arr[3].lineTo(130, 390);
ctx_arr[3].bezierCurveTo(130, 360, 220, 360, 220, 390);
ctx_arr[3].lineTo(220, 490);
ctx_arr[3].moveTo(175, 490);
ctx_arr[3].lineTo(175, 370);
ctx_arr[3].stroke();
ctx_arr[3].closePath();

ctx_arr[3].beginPath();
ctx_arr[3].arc(160, 440, 7, 0, Math.PI * 2, true);
ctx_arr[3].stroke();
ctx_arr[3].closePath();

ctx_arr[3].beginPath();
ctx_arr[3].arc(190, 440, 7, 0, Math.PI * 2, true);
ctx_arr[3].stroke();
ctx_arr[3].closePath();

// windows
ctx_arr[3].fillStyle = '#000000';
let w_w = 50, w_h = 30, w_s = 10;
drawWindow(120, 280);
drawWindow(270, 280);
drawWindow(270, 380);

function drawWindow(wsp_x, wsp_y) {
    ctx_arr[3].fillRect(wsp_x,  wsp_y, w_w, w_h);
    ctx_arr[3].fillRect(wsp_x + w_w + w_s,  wsp_y, w_w, w_h);
    ctx_arr[3].fillRect(wsp_x,  wsp_y + w_h + w_s, w_w, w_h);
    ctx_arr[3].fillRect(wsp_x + w_w + w_s,  wsp_y + w_h + w_s, w_w, w_h);
}