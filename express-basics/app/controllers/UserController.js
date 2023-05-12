const User = require("../models/user");
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      msg: "Getting users data",
      data: users,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send("no user with this id");
    } else {
      return res.status(200).json({
        msg: "Get with success",
        data: user,
      });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, email, password } = req.body;
    // controll and validation
    if (!(firstName && lastName && email && password)) {
      return res.status(409).send("All inputs are required");
    }

    const user = new User({
      firstName,
      lastName,
      email,
      password,
    });

    const saved_user = await user.save();
    res.status(201).json({
      msg: "Create with succes",
      data: saved_user,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    const updated_user = await User.findOneAndUpdate(
      { _id: id },
      {
        firstName,
        lastName,
        email,
        password,
      },
      { new: true, useFindAndModify: false }
    );
    res.status(200).json({
      msg: "Update with succes",
      data: updated_user,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).send("User not found");
    }
    await User.deleteOne({ _id: id });
    return res.status(200).send("Deleted successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
