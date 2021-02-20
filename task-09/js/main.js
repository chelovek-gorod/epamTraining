/*************
 *
 *    JS
 *
 ************/

"use strict";

// href on new or edit object
let objStudent = {};

// WebSocket status
let wait = true;

class Student {
    constructor(Id, fistName, secondName, age, speciality) {
        this.id = Id;
        this.fistName = fistName;
        this.secondName = secondName;
        this.age = age;
        this.speciality= speciality;
    }
}
/**
 * Student = new Student("fistName", "secondName", age, "speciality");
 * @constructor
 * @param {string} fistName - student fistName.
 * @param {string} secondName - student secondName.
 * @param {number} age - student age.
 * @param {string} speciality - student speciality.
 */

let inp_id = document.getElementById("inp_id");
let inp_name = document.getElementById("inp_name");
let inp_age = document.getElementById("inp_age");
let inp_spec = document.getElementById("inp_spec");

// WebSocket
const ws = new WebSocket('ws://localhost:9898/');
ws.onerror = function(event) {
    Alert("Connected Server error\ntry again later\nerror object in console...");
    console.log("Connected Server error:", event);
};
ws.onopen = function() {
    console.log('WebSocket Client Connected');
    ws.send('Connected');
};
ws.onmessage = function(e) {
    if (e.data == "unnown request") alert ("server get unnown request");
    else if (e.data == "ready edit") sendObj("edit");
    else if (e.data == "ready add new") sendObj("new");
    else if (e.data == "edit student : OK") {
        alert (e.data);
        wait = false;
    } else {
        wievStudent(e.data);
        wait = false;
    }
};

// update input values
function wievStudent(res) {
    objStudent = JSON.parse(res);
    inp_id.value = objStudent.id;
    inp_name.value = objStudent.fistName + " " + objStudent.secondName;
    inp_age.value = objStudent.age;
    inp_spec.value = objStudent.speciality;
}

// buttons
function prevStudent() {
    if (wait == false) {
        ws.send('prev');
    }
}
function nextStudent() {
    if (wait == false) {
        ws.send('next');
    }
}
function editStudent() {
    if (wait == false && checkI() && checkN() && checkA() && checkS()) {
        wait = true;
        ws.send('edit');
    }
}
function newStudent() {
    if (wait == false && checkI() && checkN() && checkA() && checkS()) {
        wait = true;
        ws.send('new');
    }
}

function sendObj(id) {
    let names = inp_name.value.split(" ");
    let nameF = names[0], nameS = '';
    if (names.length > 1) {
        nameF = names.shift();
        nameS = names.join(' ');
    }
    let sendStudent = new Student(id, nameF, nameS, parseInt(inp_age.value), inp_spec.value);
    console.log(sendStudent);
    ws.send(JSON.stringify(sendStudent));
}

function checkI() {
    let id = parseInt(inp_id.value);
    if (id == objStudent.id) return true;
    else {
        inp_id.value = objStudent.id;
        alert("Don't change ID!\nnow Student ID is edit to right\nDon't change ID!!!")
        return false;
    }
}

function checkA() {
    let age = parseInt(inp_age.value);
    if (isFinite(age) && !isNaN(age) && age > 10) return true;
    else {
        alert("Incorrect age!\nAge is an integer, greater than 10!")
        return false;
    }
}

function checkN() {
    if (inp_name.value.length > 0 && inp_name.value[0] !== ' ') return true;
    else {
        inp_id.value = objStudent.id;
        alert("Incorrect Nane!\nThe Name must start with a character!");
        return false;
    }
}

function checkS() {
    if (inp_spec.value.length > 0 && inp_name.value[0] !== ' ') return true;
    else {
        inp_id.value = objStudent.id;
        alert("Incorrect Speciality!\nThe Speciality must start with a character!");
        return false;
    }
}