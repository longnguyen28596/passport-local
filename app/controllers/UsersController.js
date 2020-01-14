import user from "../models/userModel";
import bcrypt from "bcrypt";

let index = (req, res) => {
  return res.render("users/index");
}

let login = (req, res) => {
  return res.render("users/login");
}

let fakeUser = (req, res) => {
  user.create({email: "test@gmail.com", password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(12))})
  return res.render("users/login");
}

module.exports = {
  index: index,
  login: login,
  fakeUser: fakeUser
}
