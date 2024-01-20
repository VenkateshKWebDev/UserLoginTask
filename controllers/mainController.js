const mainModel = require('../models/mainModel');

function getAllUsers(req, res) {
  mainModel.getAllUsers((users) => {
    res.render('index', { users });
  });
}

function addUser(req, res) {
  const user = {
    name: req.body.name,
    email: req.body.email
  };

  mainModel.addUser(user, () => {
    res.redirect('/');
  });
}


function updateUser(req,res){
  const id=req.params.id;
  mainModel.getSingleUser(id, (user) => {
    console.log(user);
    res.render('getUserData',{ user });
  });

  /*mainModel.getAllUsers((users) => {
    res.render('index', { users });
  });*/
}
function editUser(req, res) {
  const id = req.body.hid;

  const user = {
    name: req.body.name,
    email: req.body.email
  };
console.log(user);
  mainModel.updateUser(id, user, () => {
    mainModel.getAllUsers((users) => {
      res.render('index', { users });
    });
  });
}

function deleteUser(req, res) {
  const id = req.params.id;

  mainModel.deleteUser(id, () => {
    res.redirect('/');
  });
}

module.exports = {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
  editUser
};
