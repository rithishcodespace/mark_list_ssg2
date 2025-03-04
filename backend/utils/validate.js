const validator = require("validator");

let validate = (req) =>{
    if(!validator.isStrongPassword(req.body.password))
    {
        throw new Error("Password is not strong!");
    }
    if(!validator.isEmail(req.body.emailId))
    {
        throw new Error("Email is not valid");
    }
}

module.exports = validate;