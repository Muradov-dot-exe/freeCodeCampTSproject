const User = {
  name: "ALio",
  email: "xdxd",
  isActive: false,
};

const createUser = ({ name: string, isPaid: boolean }) => {};

createUser({ name: "ali", isPaid: false });

const createCourse = (): { name: string; price: number } => {
  return { name: "strings", price: 3123 };
};
