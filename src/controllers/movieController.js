const movieModel = require('../models/movieModel.js');

const getAllMovies = (req, res) => {
    const { sort } = req.query;
    let movies = movieModel.getAllMovies();
    if (sort) {
        if (!movies.length || !movies[0].hasOwnProperty(sort)) {
            return res.status(400).send({ message: 'Neplatny parameter sort' });
        }

        movies = movies.sort((a, b) => {
            if (a[sort] < b[sort]) return -1;
            if (a[sort] > b[sort]) return 1;
            return 0;
        }); 
    }
    res.send(movies);
};

const getMovieById = (req, res) => {
    const { id } = req.params;
    const movie = movieModel.getMovieById(id);
    if (!movie) {
        return res.status(400).send({ message: 'Film nebol najdeny' });
    }
    res.send(movie);
};

const createMovie = (req, res) => {
    const { title, author, genre, publishedYear, summary} = req.body;
    if (!title || !author || !genre || !publishedYear) {
        return res.status(400).send ({ message: 'Chybaju udeje o filme!' });
    }
    const newMovie = movieModel.createMovie({ title, author, genre, publishedYear, summary});
    res.status(201).send(newMovie);
};

const updateMovie = (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    const updatedMovie = movieModel.updateMovie(id, updates);
    if (!updatedMovie.ok) {
        return res.status(404).send({ message: 'Film nebol najdeny' });
    }
    res.send(updatedMovie);
};

const deleteMovie = (req, res) => {
    const { id } = req.params;
    const deleted = movieModel.deleteMovie(id);
    if (!deleted) {
        return res.status(404).send({ message: 'Film nebol najdeny' });
    }
    res.send({ message: 'Film bol uspesne zmazany!' });
};

module.exports = {getAllMovies, getMovieById, updateMovie, createMovie, deleteMovie};