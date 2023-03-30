//..........................require or imports the libraries..............
const express = require("express");
const bodyparser = require("body-parser");
const router = express.Router();
router.use(bodyparser.json());
const RegisterBlog = require("../schema/registerSchema");
const bcrypt = require("bcrypt");
const cors = require("cors");   
router.use(cors());   // CORS middleware to the Express application.
const jwt = require('jsonwebtoken');  //this library is used for creating and verifying JSON web tokens.
 const JWT_SECRET="asdfghjkl";   // used to define a secret key for JSON web token authentication.

 //.................................Register..............................................
router.post("/register", (req, res) => {
  RegisterBlog.findOne({ email: req.body.email })
    .then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({ error: "Email is already taken" });
      }
      bcrypt.hash(req.body.password, 12).then((hashedPass) => {
        const user = new RegisterBlog({
          username: req.body.username,
          email: req.body.email,
          phone: req.body.phone,
          state: req.body.state,
          district: req.body.district,
          address: req.body.address,
          pincode: req.body.pincode,
          password: hashedPass,
        });
        user
          .save()
          .then((user) => {
            res.json({ message: " successfully save", user: user });
            console.log(user);
          })
          .catch((err) => console.log(err));
      });
    })
    .catch((error) => console.log(error));
});
//..................................Login....................................
router.post("/login", (req, res) => {
    const {email,password} = req.body;
    // console.log(email, password)
    if (!email || !password) {
        return res.status(422).json({ error: " all the fields are required" })
    }
    RegisterBlog.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({ error: "Invalid email or password" })
            }
            console.log(savedUser)
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        // return res.json({ message: "successfully logged in" })
                        const token = jwt.sign({_id:savedUser._id},JWT_SECRET)

                        const {_id,name,email}=savedUser
                        res.json({token:token,user:{_id,name,email}})

                    }
                    else{
                        return res.json({ error: "Invalid email or password" })
                    }
                })
        })
        .catch(err => console.log(err))
})

// router.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   RegisterBlog.findOne({ email: email })
 
//     .then((savedUser) => {
//       if (!savedUser) {
//         return res.status(401).json({ error: "Invalid email or password" });
//       }
//       bcrypt.compare(password, savedUser.password).then((isMatch) => {
//         if (isMatch) {
//           const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
//           res.json({ message: "Successfully signed in", token });
//         } else {
//           res.status(401).json({ error: "Invalid email or password" });
//         }
//       });
//     })
//     .catch((error) => console.log(error));
// });


module.exports = router;
// module.exports = usermail;
