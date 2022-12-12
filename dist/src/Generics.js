"use strict";
const score = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) { }
function identityThree(val) {
    return val;
}
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
function genericClass(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
genericClass(3, "4");
function genericClassOneGeneric(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
genericClass(3, { connection: "sada", username: "sad", password: "12313" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
