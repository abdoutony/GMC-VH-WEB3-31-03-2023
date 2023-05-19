const Movie = require("../models/movie");
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({
      msg: "Get with success",
      data: movies,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
exports.getOneMovie = async (req, res) => {
  try {
    const movie = await Movie.findOne({ _id: req.params.id });
    res.status(200).json({
      msg: "Get with success",
      data: movie,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.addMovie = async (req, res) => {
  try {
    const { title, description, category, trailer } = req.body;
    //validation
    if (!(title && description && category && trailer)) {
      res.status(401).send("All inputs are required");
    }

    const new_movie = new Movie({
      title,
      description,
      category,
      trailer,
    });

    const saved_movie = await new_movie.save();
    res.status(201).json({
        msg:"Create with success",
        data:saved_movie
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateMovie = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteMovie = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).send(err.message);
  }
};
