// type User = {
//   name: string;
//   id: number;
// };

// type Admin = {
//   username: string;
//   id: number;
// };

// let ali: User | Admin = { name: "ali", id: 231 };

// ali = { username: "sa", id: 23 };

function getDbId(id: number | string) {
  console.log(`Db id is ${id}`);
}

getDbId(3);
getDbId("3");

let array: (string | number)[] = [1, 2, 3, "4"];

let user: [number, string, boolean];
user = ["hhc", 131, true];

let rgb: [number, number, number] = [255, 255, 255];


const enum SeatChoice{
    AISLE="AISLE"
    MIDDLE='MIDDLE',
    WINDOW='WINDOW'
    FOURTH=''
}

