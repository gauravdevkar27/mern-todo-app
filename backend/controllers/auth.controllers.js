const User = require('../models/user.models.js');
async function registerUser(req, res){

    let {firstName, lastName, userName, passWord} = req.body;

    try{
      const duplicate = await User.find({userName});
      if(duplicate && duplicate.length > 0) 
      {
        return res
        .status(400)
        .send(
            {message: 'User already registerd with this username'}
        );
    }
    let user = new User({firstName, lastName, userName, passWord});
    const result = await user.save();

    res
    .status(201)
    .send(
        {message: 'User registered successfully!'}
    );
    } catch(err){
        console.log(err);
        res
        .status(400)
        .send(err);
    }
    res
    .send("success");
}

const AuthController = {
    registerUser
} 

module.exports = AuthController;