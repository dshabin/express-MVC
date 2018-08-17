import UsersModel from './users.model'
import bcrypt from 'bcrypt';
import {handleError,createResponse,handleException} from './utils'

const controller = {};

controller.create = async (req, res) => {
  let userToAdd = {
  email: req.body.email,
  username: req.body.username,
  password: bcrypt.hashSync(req.body.password, 10),
  };
  try {
    const savedUser = await UsersModel.create(userToAdd ,  function (err, user) {
        if (err) {
          return handleError(res, err.message , 99);
        }
        if(user){
          return createResponse(res , user , 0)
        }
      });
    }
    catch(err) {
      return handleException(res,err.message)
  }
}

controller.auth = async (req, res) => {
  let userToAuth = {
  email: req.body.email,
  password: req.body.password,
  };

  try {
    const user = UsersModel.findOne({ email: userToAuth.email }, function (err, user) {
      if (err) {
        return handleError(res, err.message , 200);
      }
      if(user){
      bcrypt.compare(userToAuth.password, user.password, function (err, result) {
        if (result === true) {
          return createResponse(res , user , 0)
        } else {
          return handleError(res, "Bad Password." , 200);
        }
      })
    }else{
      return handleError(res, "User not fund." , 200);
    }
  });
}
catch(err) {
  const reason = err.message
  return handleException(res,reason)
}
}

//protected route sample
controller.protected = async (req, res) => {
  {
    User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
          return res.send('Error->' + error )
      } else {
        if (user === null) {
          return res.send('=== Unauthorized Access. ===')
        } else {
          return res.send('=== Auth Success ===')
        }
      }
    });
  }
}

export default controller;
