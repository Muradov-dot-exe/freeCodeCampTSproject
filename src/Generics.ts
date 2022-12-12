const score: Array<number> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {}

function identityThree<Type>(val: Type): Type {
  return val;
}

function getSearchProducts<T>(products: T[]): T {
  const myIndex = 3;
  return products[myIndex];
}

interface DataBase {
  connection: string;
  username: string;
  password: string;
}

//TODO: GENERIC CLASS THAT ONE OF THE GENERICS EXTENDS DATABASE INTERFACE

function genericClass<T, U extends DataBase>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

//genericClass(3, "4");

//TODO: GENERIC CLASS THAT TAKES DATABASE FUNCTION AS SECOND GENERIC

function genericClassOneGeneric<T, DataBase>(
  valOne: T,
  valTwo: DataBase
): object {
  return {
    valOne,
    valTwo,
  };
}

genericClass(3, { connection: "sada", username: "sad", password: "12313" });

//TODO: GENERIC CLASS

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(products: T) {
    this.cart.push(products);
  }
}
