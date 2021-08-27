import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Samantha Acevedo",
    email: "Acevedo@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "espada cosmico",
    email: "cosmic@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
