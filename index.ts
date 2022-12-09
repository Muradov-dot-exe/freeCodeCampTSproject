const User = {
  name: "ALio",
  email: "xdxd",
  isActive: false,
};

// const createUser = ({ name: string, isPaid: boolean }) => {};

// createUser({ name: "ali", isPaid: false });

const createCourse = (): { name: string; price: number } => {
  return { name: "strings", price: 3123 };
};

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetaild?: number;
};

let myUser: User = {
  _id: "123",
  name: "hhh",
  email: "asda",
  isActive: false,
};

myUser.email = "hasfa ";

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

//Type combining and combining another object to already combined types
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
