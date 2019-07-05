const db = require("../databases/sqlite");
const lists = db.lists;
const users = db.users;

const signinpage = (req, res) => {
  return res.render("signin");
};

const signinuser = (req, res) => {
  const { email, password } = req.body;
  users
    .findOne({
      where: {
        email: email,
        password: password
      }
    })
    .then(r => {
      console.log(r);
      lists
        .findAll({
          where: {
            email: email
          }
        })
        .then(result => {
          req.session.user = { email, name: r.name };
          console.log(result);
          return res.redirect("/");
        })
        .catch(err => console.log(err));
    })
    .catch(err => {
      console.log(err);
      return res.send("DENIED");
    });
};

const signout = (req, res) => {
  req.session.destroy(() => {
    console.log("err occured :( ");
  });
  res.redirect("/");
};

module.exports = { signinpage, signinuser, signout };
