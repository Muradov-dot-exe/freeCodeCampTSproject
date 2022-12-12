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

function genericClass<T, U extends number>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

genericClass(3, "4");
