/*************
 *
 *    JS
 *
 ************/

"use strict";

let startScreenText = true;
let floatOn = false;
let priorOn = true;

let dotInNumber = false;

let maxLengthStr = 32;

let arrNumbers = [];
let arrSigns = [];

let arr = [];
let str = '';

const inputScreen = document.getElementById("inputScreen"),
    resultScreen = document.getElementById("resultScreen"),
    radioFloat = document.getElementById("radioFloat"),
    radioInt = document.getElementById("radioInt"),
    checkPriority = document.getElementById("checkPriority");

function btnClickRadioInt() {
    floatOn = false;
    radioFloat.checked = false;
    radioInt.checked = true;
    btnClick("C");
}

function btnClickRadioFloat() {
    floatOn = true;
    radioFloat.checked = true;
    radioInt.checked = false;
    btnClick("C");
}

function btnClickCheckPriority() {
    priorOn = checkPriority.checked;
}

function btnClick(key) {

    if (startScreenText == true) {
        startScreenText = false;
        inputScreen.innerText = '';
    }
    switch(key) {
        case '.' :
            // chack float input on and in last namber has not a dot
            if (dotInNumber === false && floatOn === true) {
                // check empty input or thet last char is a sign
                if (str == '' || checkLastIsNaN(str) === true) {
                    str+='0.';
                    dotInNumber = true;
                }
                // check thet last char is a digit
                else if (checkLastIsNaN(str) == false) {
                    str+=key;
                    dotInNumber = true;
                }
            }
            break;
        case '0' :
            if (floatOn === false) {
                if (checkLast(str) != '0') str+=key;
            } else {
                if (checkLast(str) == '0') {
                    if (dotInNumber == true ) str+=key;
                } else str+=key;
            }
            break;
        case '1' : 
        case '2' :
        case '3' :
        case '4' : 
        case '5' : 
        case '6' : 
        case '7' : 
        case '8' : 
        case '9' :
            str+=key;
            break;
        case '-' : 
            if (checkLast(str) != '-' && checkLast(str) != '+') {
                str+=key;
                dotInNumber = false;
            }
            break;
        case '*' :
        case '/' :
        case '+' :
            if (str !="" && checkLastIsNaN(str) == false) {
                str+=key;
                dotInNumber = false;
            }
            break;
        case '=' :
            if (checkLastIsNaN(str) == false) {
                if (priorOn == true) calckPriorityTrue();
                else calckPriorityFalse();
            } else {
                resultScreen.innerText = 'Result screen';
                alert("Add a number or delete the last character!");
            }
            break;
        case 'C' :
            arrNumbers = [];
            arrSigns = [];
            inputScreen.innerText = 'Start typing what to culc...';
            str = '';
            resultScreen.innerText = 'Result screen';
            dotInNumber = false;
            break;
        case '<' : if (str != '') str = str.slice(0, -1); break;
        case 'SEND' : 
            if (arr.length > 0) {
                sendData(arr);
                console.log("arr = " + arr);
                arr = [];
            }
            break;
    }

    if (str.length > maxLengthStr) {
        str = str.slice(0, -1);
        alert("Exceeded the limit of entered characters \n(maximum " + maxLengthStr + " characters)");
    }

    inputScreen.innerText = str;
}

function checkLast(str) {
    let last = str.slice(-1);
    return last;
}

function checkLastIsNaN(str) {
    let last = +str.slice(-1);
    return isNaN(last);
}

function calckPriorityTrue() {
    getNSArrays();
    for (let i = 0; i<arrSigns.length; i++) {
        switch (arrSigns[i]) {
            case '*' : 
                arrNumbers[i+1] = arrNumbers[i] * arrNumbers[i+1];
                arrNumbers.splice(i, 1);
                arrSigns.splice(i, 1);
                i--;
                break;
            case '/' :
                arrNumbers[i+1] = arrNumbers[i] / arrNumbers[i+1];
                arrNumbers.splice(i, 1);
                arrSigns.splice(i, 1);
                i--;
                break;
        }
    }
    for (let i = 0; i<arrSigns.length; i++) {
        switch (arrSigns[i]) {
            case '+' :  arrNumbers[i+1] = arrNumbers[i] + arrNumbers[i+1]; break;
            case '-' :  arrNumbers[i+1] = arrNumbers[i] - arrNumbers[i+1]; break;
        }
    }
    arr.push(str + " = " + arrNumbers[arrSigns.length] + "(calckPriorityTrue)");
    resultScreen.innerText = arrNumbers[arrSigns.length];
    arrNumbers = [];
    arrSigns = [];
}

function calckPriorityFalse() {
    getNSArrays();
    for (let i = 0; i<arrSigns.length; i++) {
        switch (arrSigns[i]) {
            case '+' :  arrNumbers[i+1] = arrNumbers[i] + arrNumbers[i+1]; break;
            case '-' :  arrNumbers[i+1] = arrNumbers[i] - arrNumbers[i+1]; break;
            case '*' :  arrNumbers[i+1] = arrNumbers[i] * arrNumbers[i+1]; break;
            case '/' :  arrNumbers[i+1] = arrNumbers[i] / arrNumbers[i+1]; break;
        }
    }
    arr.push(str + " = " + arrNumbers[arrSigns.length] + "(calckPriorityFalse)");
    resultScreen.innerText = arrNumbers[arrSigns.length];
    arrNumbers = [];
    arrSigns = [];
}

function getNSArrays () {
    let num = '';
    for (let n = 0; n < str.length; n++) {
        if (str[n] == '-') {
            if (arrNumbers.length == arrSigns.length) {
                if (num != '') {
                    arrSigns.push(str[n]);
                    arrNumbers.push(+num);
                    num = '';
                } else {
                    num += str[n];
                }
            } else {
                arrSigns.push(str[n]);
                arrNumbers.push(+num);
                num = '';
            }
        } else if (str[n] == '+' || str[n] == '*' || str[n] == '/') {
            arrSigns.push(str[n]);
            arrNumbers.push(+num);
            num = '';
        } else {
            num += str[n];
            if (n == str.length-1) {
                arrNumbers.push(+num);
            }
        }
    }
}

// SEND //
function sendData(send){
    
    let request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                alert('Array send!');
                console.log("server responce: " + request.response);
            } else {
                alert('Send error, try again later...');
            }
        }
    };
    
    request.open('POST', './php/server.php', true);
    console.log("setd to server: " + JSON.stringify(send));
    request.send(JSON.stringify(send));
}