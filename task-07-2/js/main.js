/*************
 *
 *    JS
 *
 ************/

"use strict";

let urnOpen = false;

let urn = document.createElement("img");
urn.src = "./img/urn_is_close.gif";
urn.style='position: absolute; top: 0; left: 0;'
document.body.appendChild(urn);

let garbage_arr = [];

let gr_imgs_arr = ["./img/paper.gif", "./img/journal.gif", "./img/bank.gif"];

let garbages = 20, w_size = 90, h_size = 90, max_img_w = 200, max_img_h = 170;
let arr_i = 0, w_step = w_size + urn.width, h_step = 0;

while (garbages > 0) {
    if (w_step > urn.width && w_step < window.screen.width + max_img_w) {
        let rr = Math.random();
        if (rr < 0.12 && ((w_step * w_size) > urn.width && (h_step * h_size) > urn.height)) {
            garbage_arr.push(document.createElement("img"));
            if (rr > 0.08) garbage_arr[arr_i].src = gr_imgs_arr[0];
            else if (rr > 0.04) garbage_arr[arr_i].src = gr_imgs_arr[1];
            else garbage_arr[arr_i].src = gr_imgs_arr[2];
            garbage_arr[arr_i].style = 'position: absolute; top: ' + h_step + 'px; left: ' + w_step + 'px;';
            document.body.appendChild(garbage_arr[arr_i]);
            garbage_arr[arr_i].onmousedown = function(event) {omd(this, event);};
            garbage_arr[arr_i].ondragstart = function() {return false;};
            garbages -= 1; arr_i += 1;
        }
    }
    if (w_step + w_size + max_img_w > window.screen.width) {
        w_step = 0;
        h_step += h_size;
    }
    else {w_step += w_size;}
}

function omd (img, event) {
    img.style.zIndex = 1000;
    document.body.append(img);
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        img.style.left = pageX - img.offsetWidth / 2 + 'px';
        img.style.top = pageY - img.offsetHeight / 2 + 'px';

        if (parseFloat(img.style.left) <= urn.width && parseFloat(img.style.top) <= urn.height) {
            if (urnOpen == false) urn.src ='./img/urn_to_open_glow.gif';
            urnOpen = true;
        } else {
            if (urnOpen == true) urn.src ='./img/urn_to_close.gif';
            urnOpen = false;
        }
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    img.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        if (urnOpen == true) {
            urn.src = './img/urn_to_close.gif';
            img.remove();
            urnOpen = false;
        }
        img.onmouseup = null;
    };
}