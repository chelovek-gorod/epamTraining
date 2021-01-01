/*************
 *
 *    JS
 *
 ************/

"use strict";

// site version
let vSite = "4.3";
document.getElementById('divVsite').innerHTML=" V: " + vSite;

// modifying a div with a date
let divDate = document.getElementById('divDate');
updateDate ();

// date output function
function updateDate () {
    let newDate = new Date();
    let day = newDate.getDate(),
        month = newDate.getMonth() + 1,
        year = newDate.getFullYear(),
        hours = newDate.getHours(),
        minutes = (+newDate.getMinutes() + 1 < 10) ? ( "0" + (newDate.getMinutes() + 1)) : newDate.getMinutes() + 1,
        seconds = (+newDate.getSeconds() < 10) ? ("0" + newDate.getSeconds()) : newDate.getSeconds();

    let datetime = year + "-" + month + "-" + day + "T" + hours + ":" + minutes; // 2010-04-07T17:00
    divDate.setAttribute('datetime', datetime)

    divDate.innerHTML = "<span class='grey'>&nbsp;&nbsp;&nbsp;&nbsp; Now: </span>" + day + "." + month + "." + year
                      + "&nbsp;<span class='grey'> ◕" + hours + ":" + minutes + ":" + seconds + "</span>";
    setTimeout(updateDate, 1000);
}

// table styling //
function changeTBC(value) {
    document.querySelector("table").style.borderColor = value;

    let table = document.querySelector("table").getElementsByTagName("td");
    for(let i = 0; i < table.length; i++) {
        table[i].style.borderColor = value;
    }
    console.log(value);
}
function changeTHC(value) {
    document.querySelector("thead").style.backgroundColor = value;
    console.log(value);
}
function changeTBS(value) {
    document.querySelector("table").style.borderWidth = +value*2 + "px";

    let table = document.querySelector("table").getElementsByTagName("td");
    for(let i = 0; i < table.length; i++) {
        table[i].style.borderWidth = value + "px";
    }
    console.log(value);
}
function changeTOS(value) {
    let color1, color2, bordSz;
    switch (+value) {
        case 0 :
            color1 = "#ffffff";
            color2 = "#555555";
            bordSz = 2;
            break;
        case 1 :
            color1 = "#4294f7";
            color2 = "#690c00";
            bordSz = 2;
            break;
        case 2 :
            color1 = "#d6d6d6";
            color2 = "#7b770a";
            bordSz = 2;
            break;
    }
    changeTBC(color1); console.log(color1);
    changeTHC(color2); console.log(color2);
    changeTBS(bordSz); console.log(bordSz);
}

// work with form //
let user = {email: '', message: ''};

let patternEmail = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");

function endInput(value, id) {
    switch (id) {
        case 'email' :
            if (document.getElementById(id).value === '') {
                user.email = '';
            } else if (patternEmail.test(String(value).toLowerCase())) {
                user.email = String(value);
            } else {
                alert('Invalid e-mail');
                user.email = '';
                document.getElementById(id).value = ''
            }
            break;
        case 'message' : 
            if (document.getElementById(id).value === '') {
                user.message = '';
            } else {
                user.message = document.getElementById(id).value;
            }
            break;
        default: console.log('DEFAUIL!!! id = "' + id + '"; value = ' + value);
    }
}

function clickSend(form) {
    if (user.email === '') {
        alert("Fill your email!");
    } else if (user.message === '') {
        alert("Your message is empty!");
    } else {
        sendData(form);
        form.reset();
        alert('Message on send');
    }
}

function sendData(form){
    
    let request = new XMLHttpRequest();
    
    // receiving a response from the server
    request.addEventListener('load', function() {
        // here we can process the response from the server
        if (request.response == 1) {
            alert('Message send, Thank You!');
            form.reset();
        } else {
            alert('Send error, try again later...');
        }
    });
    
    //
    request.open('POST', './php/server.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send('email=' + encodeURIComponent(user.email) + '&message=' + encodeURIComponent(user.message));
}