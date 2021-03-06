var BaseDeDatos = require("../dao/BaseDeDatos.js");

let baseDeDatos = new BaseDeDatos();

const add_student = async (req, res, next) => {

  try {
      const student = await baseDeDatos.add_student(req.body.email, req.body.date, req.body.course, req.body.image)
      res.send(student);
  } catch (error) {
      res.status(500).send(error);
  }
}

const put_student = async (req, res, next) => {

  try {
      const student = await baseDeDatos.edit_student(req.query.email, req.query.date, req.query.course, req.query.image);
      res.send(student);
  } catch (error) {
      res.status(500).send(error);
  }
}

const delete_student = async (req, res, next) => {

  try {
      const student = await baseDeDatos.delete_student(req.query.email);
      res.send(student);
  } catch (error) {
      res.status(500).send(error);
  }
}

const logout = (req, res, next) => {

  console.log(req.user.email + " ha cerrado sesión.");

  req.logout(function(err) {
    if (err) { return next(err); }
    res.clearCookie("token");
    res.redirect("http://localhost:3000/");
    console.log(`-------> User Logged out`);
  });

}

module.exports = {
  add_student,
  put_student,
  delete_student,
  logout
};
