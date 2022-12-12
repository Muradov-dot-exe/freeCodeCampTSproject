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
//TODO: GENERIC CLASS THAT ONE OF THE GENERICS EXTENDS DATABASE INTERFACE
function genericClass(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
//genericClass(3, "4");
//TODO: GENERIC CLASS THAT TAKES DATABASE FUNCTION AS SECOND GENERIC
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
