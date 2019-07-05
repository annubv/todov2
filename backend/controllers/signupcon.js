const db = require("../databases/sqlite");
const lists = db.lists;
const users = db.users;

const signuppage = (req, res) => {
  return res.render("signup");
};

const signupuser = (req, res) => {
  const { name, email, password } = req.body;
  console.log({ name, email, password });
  users
    .create({
      name,
      email,
      password
    })
    .then(result => {
      console.log("Added" + result);
      return res.render("signup");
    })
    .catch(err => console.log(err));
};

module.exports = { signuppage, signupuser };
