const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
});

router.post("/all", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = req.body.password ? await bcrypt.hash(req.body.password, salt) : "fjhvjfr";

    const users = req.body;
    console.log(req.body)
    //create new user


    users.forEach(async (user) => {
      console.log("Saving user ", user.username)
      const newUser = new User({
        username: user.username,
        email: user.email,
        password: hashedPassword,
        profilePicture: user.profilePicture
      });

      const savedUser = await newUser.save()
      console.log("Daving user ", savedUser.username)
    });
    //save user and respond
    res.status(200).json("saved");
  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {

    console.log("IN login with req", req)
    const user = await User.findOne({ email: req.body.email });
    console.log(User)
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
