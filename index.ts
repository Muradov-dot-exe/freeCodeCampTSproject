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
};

let myUser: User = {
  _id: "123",
  name: "hhh",
  email: "asda",
  isActive: false,
};
