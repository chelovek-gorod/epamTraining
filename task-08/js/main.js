/*************
 *
 *    JS
 *
 ************/

"use strict";

let arr_j = [document.getElementById("j_1"), document.getElementById("j_2"), document.getElementById("j_3")];

let a_s = document.getElementById("a_s"),
    inp_pr_1 = document.getElementById("inp_pr_1"),
    inp_pr_2 = document.getElementById("inp_pr_2"),
    inp_pr_3 = document.getElementById("inp_pr_3"),
    inp_name = document.getElementById("inp_name"),
    inp_note = document.getElementById("inp_note");

a_s.innerHTML = "[" + getSrtDate() + "] : JS onload<br>";

let json_url_arr = ['./json/your_name_data[1].json', './json/your_name_data[2].json', './json/your_name_data[3].json'];

let addPriority = 1;

function changePriority(p) {addPriority = p;}

function getJSON(n) {
    var request = new XMLHttpRequest();
    request.open('GET', json_url_arr[n]);
    request.responseType = 'json';
    request.send();
    a_s.innerHTML += "[" + getSrtDate() + "] : send request to get JSON from " + json_url_arr[n] + "<br>";

    request.onload = function() {
        let obj = request.response;

        arr_j[n].innerHTML = "DATE: " + obj.date + "<br>";
        arr_j[n].innerHTML += "TIME: " + obj.time + "<br>";
        arr_j[n].innerHTML += "NAME: " + obj.name + "<br>";
        arr_j[n].innerHTML += "PRIORITY: " + obj.priority + "<br>";
        arr_j[n].innerHTML += "NOTE: " + obj.note;

        a_s.innerHTML += "[" + getSrtDate() + "] : get response from " + json_url_arr[n] + "<br>";

        if (n == 2) a_s.innerHTML += "[" + getSrtDate() + "] : end Promise OK.";
    }
}

function clearFields() {
    inp_pr_1.checked = true;
    inp_name.value = inp_note.value = '';
}

function newJSON() {
    if (inp_name.value != '') {
        console.log("OK!");
        let object = new obj_json(inp_name.value, addPriority, inp_note.value);
        console.log(object);
        writeNew(object);
    } else {
        alert("Object name is empty!");
    }
}

class obj_json {
    constructor(name, priority, note) {
        this.date = myDate("d");
        this.time = myDate("t");
        this.name = name;
        this.priority = priority;
        this.note= note;
    }
}

/**
 * ingredient = new Ingredient("Type", "Name", Price, Calories).edit();
 * @constructor
 * @param {string} name - object name.
 * @param {number} priority - object priority.
 * @param {string} note - object note.
 */
 
// JSONs
// your_name_data[1].json = {"date":"2021-2-10","time":"12h:35m:44s","name":"New Object 1","priority":1,"note":"note about new object..."}
// your_name_data[2].json = {"date":"2021-2-11","time":"13h:45m:47s","name":"New Object 2","priority":2,"note":"note about new object..."}
// your_name_data[3].json = {"date":"2021-2-12","time":"14h:55m:49s","name":"New Object 3","priority":3,"note":"note about new object..."}

function myDate(p) {
    let date = getSrtDate();
    let date_arr = date.split(' ');
    if (p == "d") return date_arr[0]; // 2010-04-07
    if (p == "t") return date_arr[1]; // 17h:00m:15s
}
 
// let obj = new obj_jsom("NewObject", 1, "Normal note...").edit();

function getSrtDate() {
    let newDate = new Date();
    let day = newDate.getDate(),
    month = newDate.getMonth() + 1,
    year = newDate.getFullYear(),
    hours = newDate.getHours(),
    minutes = (+newDate.getMinutes() + 1 < 10) ? ( "0" + (newDate.getMinutes() + 1)) : newDate.getMinutes() + 1,
    seconds = (+newDate.getSeconds() < 10) ? ("0" + newDate.getSeconds()) : newDate.getSeconds();

    return year + "-" + month + "-" + day + " " + hours + "h:" + minutes + "m:" + seconds + "s"; // 2010-04-07 17h:00m:15s
}

new Promise(function(resolve, reject) {
    a_s.innerHTML += "[" + getSrtDate() + "] : start Promise." + "<br>";
    setTimeout(() => resolve(0), 1000);
}).then(function(result) {
    getJSON(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result + 1), 3000);
    });
  
}).then(function(result) { // (**)
    getJSON(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result + 1), 3000);
    });
  
}).then(function(result) {
    getJSON(result);
});

// SEND //
function writeNew(obj){
    
    let request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                alert('Request send!');
                console.log("server responce: " + request.response);
            } else {
                alert('Send error, try again later...');
            }
        }
    };
    
    request.open('POST', './php/server.php', true);
    request.send(JSON.stringify(obj));

    console.log("sending obj:");
    console.log(obj);
}

/*
Задание 8
1. Необходимо создать простейшее web-приложение TODO-LIST

2. Приложение должно выглядеть как HTML-страница с 5 областями.

3. Первые 3 области должны загружать данные через AJAX из файлов: your_name_data[N].json
где N – число от 1 до 3, определяющее номер области.

4. Данные для 1ой области должны загружаться с задержкой в 1 сек ..., для 3ей области – через 3 секунды.

5. Создать класс, содержащий информацию о событии (дата события, время события, наименование события, степень важности, примечания)

6. Данные объекты должны быть сериализованы в формате JSON в указанные в п.3 файлы

7. В четвёртой области вывести статусы выполнения AJAX-запросов

8. В пятой области предусмотреть возможность редактирования данных и перезаписи файлов

9. Примечание:
Логика работы должна быть следующая: загружается страница в
браузере и через указанные интервалы должна выводится информация в областях по
циклу (т.е. для первой области данные должны обновляться через 1, 4, 7 и т.д. секунд).
В четвёртой области должен отображаться лог выполнения AJAX-запросов. В пятой
области должна быть возможность введения информации о событии (создание
объекта из п.5) и сохранения его в один из выбранных файлов.
*/