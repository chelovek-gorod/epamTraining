/*************
 *
 *    JS
 *
 ************/

"use strict";

let s_cheese = document.getElementById("s_cheese");
let s_sauce = document.getElementById("s_sauce");
let s_dough = document.getElementById("s_dough");
let s_rim = document.getElementById("s_rim");
let spanPrice = document.getElementById("spanPrice");
let spanCalories = document.getElementById("spanCalories");

let add_cheese = document.getElementById("addCheese");
let add_topping = document.getElementById("addTopping");
let add_sauce = document.getElementById("addSauce");

let arr_doughs = [];
let arr_rims = [];
let arr_sauces = []; 
let arr_toppings = [];
let arr_cheeses = [];

let clickLast = "";

let addCounter = 0;

class Ingredient {
    constructor(type, name, price, calories) {
        this.type = type;
        this.name = name;
        this.price = price;
        this.calories = calories;
    }

    add() {
        switch (this.type) {
            case "dough" :
                if (scanArray(arr_doughs, this)){
                    if (this.name != '') {
                        if (isFinite(this.price) && !isNaN(this.price)) {
                            if (isFinite(this.calories) && !isNaN(this.calories)) {
                                arr_doughs.push(this);
                            } else alert("Add ingredientemty " + this + " with wrong calories!");
                        } else alert("Add ingredientemty " + this + " with wrong price!");
                    } else alert("Add ingredientemty " + this + " with empty name!");
                } else alert("Ingredient " + this + " already exist!");
                break;
    
            case "rim" :
                if (scanArray(arr_rims, this)){
                    if (this.name != '') {
                        if (isFinite(this.price) && !isNaN(this.price)) {
                            if (isFinite(this.calories) && !isNaN(this.calories)) {
                                arr_rims.push(this);
                            } else alert("Add ingredientemty " + this + " with wrong calories!");
                        } else alert("Add ingredientemty " + this + " with wrong price!");
                    } else alert("Add ingredientemty " + this + " with empty name!");
                } else alert("Ingredient " + this + " already exist!");
                break;
    
            case "sauce" :
                if (scanArray(arr_sauces, this)){
                    if (this.name != '') {
                        if (isFinite(this.price) && !isNaN(this.price)) {
                            if (isFinite(this.calories) && !isNaN(this.calories)) {
                                arr_sauces.push(this);
                            } else alert("Add ingredientemty " + this + " with wrong calories!");
                        } else alert("Add ingredientemty " + this + " with wrong price!");
                    } else alert("Add ingredientemty " + this + " with empty name!");
                } else alert("Ingredient " + this + " already exist!");
                break;
    
            case "topping" :
                if (scanArray(arr_toppings, this)){
                    if (this.name != '') {
                        if (isFinite(this.price) && !isNaN(this.price)) {
                            if (isFinite(this.calories) && !isNaN(this.calories)) {
                                arr_toppings.push(this);
                            } else alert("Add ingredientemty " + this + " with wrong calories!");
                        } else alert("Add ingredientemty " + this + " with wrong price!");
                    } else alert("Add ingredientemty " + this + " with empty name!");
                } else alert("Ingredient " + this + " already exist!");
                break;
    
            case "cheese" :
                if (scanArray(arr_cheeses, this)){
                    if (this.name != '') {
                        if (isFinite(this.price) && !isNaN(this.price)) {
                            if (isFinite(this.calories) && !isNaN(this.calories)) {
                                arr_cheeses.push(this);
                            } else alert("Add ingredientemty " + this + " with wrong calories!");
                        } else alert("Add ingredientemty " + this + " with wrong price!");
                    } else alert("Add ingredientemty " + this + " with empty name!");
                } else alert("Ingredient " + this + " already exist!");
                break;
            default: alert("Ingredient " + this + " type is wrong!");
        }
    }
}

function scanArray(arr, obj) {
    if (arr.length === 0) {return true;} else {
        for (let i = 0; i < arr.length; i++){
            if (arr[i] == obj) return false;
        }
        return true;
    }
}

// add some Ingredients

/**
 * ingredient = new Ingredient("Type", "Name", Price, Calories).add();
 * @constructor
 * @param {string} Type - Specify one of the following types: 'doughs', 'rims', 'sauces', 'toppings', 'cheeses'.
 * @param {string} Name - Name of the ingredient.
 * @param {number} Price - Price of this ingredient.
 * @param {number} Calories - How many colors are in this ingredient.
 */
/*
already exists:
normalDough{"dough", "Normal", 0.70, 600}
regularRim{"rim", "Regular", 0.20, 150}
tomatoSauce{"sauce", "Tomato", 0.70, 220}
mozzarellaCheese{"cheese", "Mozzarella", 2.20, 602}
*/

//doughs
let normalDough = new Ingredient("dough", "Normal", 0.70, 600).add();
let thinDough = new Ingredient("dough", "Thin", 0.80, 400).add();
let thickDough = new Ingredient("dough", "Thick", 1.00, 900).add();

//rims
let regularRim = new Ingredient("rim", "Regular", 0.20, 150).add();
let cheeseRim = new Ingredient("rim", "Cheese", 2.00, 850).add();
let hotDogRim = new Ingredient("rim", "Hot-Dog", 1.80, 750).add();

//sauces
let tomatoSauce = new Ingredient("sauce", "Tomato", 0.70, 220).add();
let mayoSauce = new Ingredient("sauce", "Mayo", 0.70, 420).add();
let garlicSauce = new Ingredient("sauce", "Garlic", 0.70, 320).add();

//toppings
let hamTopping = new Ingredient("topping", "Ham", 3.90, 1105).add();
let chickenTopping = new Ingredient("topping", "Chicken", 2.80, 905).add();
let shrimpTopping = new Ingredient("topping", "Shrimp", 5.70, 1005).add();
let musselsTopping = new Ingredient("topping", "Mussels", 4.60, 805).add();
let tomatoTopping = new Ingredient("topping", "Tomato", 1.10, 305).add();
let mushroomsTopping = new Ingredient("topping", "Mushrooms", 2.30, 605).add();
let pepperTopping = new Ingredient("topping", "Pepper", 1.80, 405).add();

//cheeses
let mozzarellaCheese = new Ingredient("cheese", "Mozzarella", 2.20, 602).add();
let parmesanCheese = new Ingredient("cheese", "Parmesan", 2.70, 702).add();
let maasdamCheese = new Ingredient("cheese", "Maasdam", 3.00, 802).add();

// markups
let k1 = 10;
let k2 = 15;

let pizza = {
    orderDate : new Date(),
    dough : '',
    rim : '',
    sauces : [],
    toppings : [],
    cheeses : [],
    price : 0,
    calories : 0
};

// test ingredients
console.log(arr_doughs);
console.log(arr_rims);
console.log(arr_sauces); 
console.log(arr_toppings);
console.log(arr_cheeses);

// update ingredients
updateIngredients(s_cheese, arr_cheeses);
updateIngredients(s_sauce, arr_sauces);
updateIngredients(s_dough, arr_doughs);
updateIngredients(s_rim, arr_rims);

recalcPizza()

function updateIngredients(sel, arr) {
    let iList = "";
    for (let i = 0; i < arr.length; i++) {
        iList += "<option ";
        if (i === 0) {
            iList += "selected ";
            //pizza.price += arr[0].price;
            //pizza.calories += arr[0].calories;
            switch (arr[0].type) {
                case "dough": pizza.dough = arr[0].name; break;
                case "rim": pizza.rim = arr[0].name; break;
                case "sauce": pizza.sauces.push(arr[0].name); break;
                case "cheese": pizza.cheeses.push(arr[0].name); break;
            }
        }
        iList += "value=" + i + " calories=" + arr[i].calories + " price=" + arr[i].price + ">" + arr[i].name + "</option>";
    }
    sel.innerHTML = iList;
}

// changing ingredient
function changeDough(s) {
    pizza.dough = s.options[s.selectedIndex].text;
    recalcPizza();
}

function changeRim(s) {
    pizza.rim = s.options[s.selectedIndex].text;
    recalcPizza();
}

function clickToLast(s) {
    clickLast = s.options[s.selectedIndex].text;
}

function changeSauce(s) {
    for (let i = 0; i < pizza.sauces.length; i++) {
        if (pizza.sauces[i] == clickLast) pizza.sauces.splice(i, 1);
    }
    pizza.sauces.push(s.options[s.selectedIndex].text);
    recalcPizza();
}

function changeTopping(s) {
    for (let i = 0; i < pizza.toppings.length; i++) {
        if (pizza.toppings[i] == clickLast) pizza.toppings.splice(i, 1);
    }
    pizza.toppings.push(s.options[s.selectedIndex].text);
    recalcPizza();
}

function changeCheese(s) {
    for (let i = 0; i < pizza.cheeses.length; i++) {
        if (pizza.cheeses[i] == clickLast) pizza.cheeses.splice(i, 1);
    }
    pizza.cheeses.push(s.options[s.selectedIndex].text);
    recalcPizza();
}

function recalcPizza() {
    let price = 0;
    let calories = 0;
    let i,a;
    for (a = 0; a < arr_doughs.length; a++) {
        if (arr_doughs[a].name == pizza.dough) {
            price += arr_doughs[a].price;
            calories += arr_doughs[a].calories;
            break;
        }
    }
    for (a = 0; a < arr_rims.length; a++) {
        if (arr_rims[a].name == pizza.rim) {
            price += arr_rims[a].price;
            calories += arr_rims[a].calories;
            break;
        }
    }
    for(i = 0; i < pizza.sauces.length; i++) {
        for (a = 0; a < arr_sauces.length; a++) {
            if (arr_sauces[a].name == pizza.sauces[i]) {
                price += arr_sauces[a].price;
                calories += arr_sauces[a].calories;
                break;
            }
        }
    }
    for(i = 0; i < pizza.toppings.length; i++) {
        for (a = 0; a < arr_toppings.length; a++) {
            if (arr_toppings[a].name == pizza.toppings[i]) {
                price += arr_toppings[a].price;
                calories += arr_toppings[a].calories;
                break;
            }
        }
    }
    for(i = 0; i < pizza.cheeses.length; i++) {
        for (a = 0; a < arr_cheeses.length; a++) {
            if (arr_cheeses[a].name == pizza.cheeses[i]) {
                price += arr_cheeses[a].price;
                calories += arr_cheeses[a].calories;
                break;
            }
        }
    }

    if (pizza.price < k1) pizza.price *= 1.2;
    else if (pizza.price <= k2) pizza.price *= 1.15;
    else pizza.price *= 1.1;
    
    pizza.price = price.toFixed(2);
    pizza.calories = calories.toFixed(0);
    spanPrice.innerHTML = pizza.price;
    spanCalories.innerHTML = pizza.calories; 

    console.log("pizza RECALC: ");
    console.log("orderDate : " + pizza.orderDate);
    console.log("dough : " + pizza.dough);
    console.log("rim : " + pizza.rim);
    console.log("sauces : " + pizza.sauces);
    console.log("toppings : " + pizza.toppings);
    console.log("cheeses : " + pizza.cheeses);
    console.log("price : " + pizza.price);
    console.log("calories : " + pizza.calories);
}

function addCheese() {
    let iList = "<select id='s" + addCounter + "' onchange='changeCheese(this)' onclick='clickToLast(this)'>";
    for (let i = 0; i < arr_cheeses.length; i++) {
        iList += "<option ";
        if (i === 0) {
            iList += "selected ";
            pizza.cheeses.push(arr_cheeses[0].name)
        }
        iList += "value=" + i + " calories=" + arr_cheeses[i].calories + " price=" + arr_cheeses[i].price + ">" + arr_cheeses[i].name + "</option>";
    }
    iList += "</select><button id='x" + addCounter + "' class='x-button' onclick='xCheese(this.id)'>x</button>"
    add_cheese.insertAdjacentHTML("beforebegin", iList);
    addCounter++;
    recalcPizza();
}

function addTopping() {
    let iList = "<select id='s" + addCounter + "' onchange='changeTopping(this)' onclick='clickToLast(this)'>";
    for (let i = 0; i < arr_toppings.length; i++) {
        iList += "<option ";
        if (i === 0) {
            iList += "selected ";
            pizza.toppings.push(arr_toppings[0].name)
        }
        iList += "value=" + i + " calories=" + arr_toppings[i].calories + " price=" + arr_toppings[i].price + ">" + arr_toppings[i].name + "</option>";
    }
    iList += "</select><button id='x" + addCounter + "' class='x-button' onclick='xTopping(this.id)'>x</button>"
    add_topping.insertAdjacentHTML("beforebegin", iList);
    addCounter++;
    recalcPizza();
}

function addSauce() {
    let iList = "<select id='s" + addCounter + "' onchange='changeSauce(this)' onclick='clickToLast(this)'>";
    for (let i = 0; i < arr_sauces.length; i++) {
        iList += "<option ";
        if (i === 0) {
            iList += "selected ";
            pizza.sauces.push(arr_sauces[0].name)
        }
        iList += "value=" + i + " calories=" + arr_sauces[i].calories + " price=" + arr_sauces[i].price + ">" + arr_sauces[i].name + "</option>";
    }
    iList += "</select><button id='x" + addCounter + "' class='x-button' onclick='xSauce(this.id)'>x</button>"
    add_sauce.insertAdjacentHTML("beforebegin", iList);
    addCounter++;
    recalcPizza();
}

function xCheese(x_id) {
    let x = document.getElementById(x_id);
    let s_id = "s" + x_id.slice(1);
    let s = document.getElementById(s_id);
    let ing = s.options[s.selectedIndex].text;
    for (let i = 0; i < pizza.cheeses.length; i++) {
        if (pizza.cheeses[i] == ing) {
            pizza.cheeses.splice(i, 1);
            break;
        }
    }
    x.remove();
    s.remove();
    recalcPizza();
}

function xTopping(x_id) {
    let x = document.getElementById(x_id);
    let s_id = "s" + x_id.slice(1);
    let s = document.getElementById(s_id);
    let ing = s.options[s.selectedIndex].text;
    for (let i = 0; i < pizza.toppings.length; i++) {
        if (pizza.toppings[i] == ing) {
            pizza.toppings.splice(i, 1);
            break;
        }
    }
    x.remove();
    s.remove();
    recalcPizza();
}

function xSauce(x_id) {
    let x = document.getElementById(x_id);
    let s_id = "s" + x_id.slice(1);
    let s = document.getElementById(s_id);
    let ing = s.options[s.selectedIndex].text;
    for (let i = 0; i < pizza.sauces.length; i++) {
        if (pizza.sauces[i] == ing) {
            pizza.sauces.splice(i, 1);
            break;
        }
    }
    x.remove();
    s.remove();
    recalcPizza();
}


// SEND //
function sendOrder(){
    
    let request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                alert('Order send!');
                console.log("server responce: " + request.response);
            } else {
                alert('Send error, try again later...');
            }
        }
    };
    
    request.open('POST', './php/server.php', true);
    request.send(JSON.stringify(pizza));
}