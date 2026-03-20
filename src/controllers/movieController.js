const movieModel = require('../models/movieModel.js');

const getAllMovies = (req, res) => {
    const { sort } = req.query;
    let movie = movieModel.getAllMovies();
    if(sort) {
        if (!movies.lenght || !movies[0].hasOwnProperty(sort)) {
            return res.status(400).send({ message: 'Neplatny parameter sort' });
        }

        movies = movie.sort((a, b) => {
            if (a[sort] < b[sort]) return -1;
            if (a[sort] > b[sort]) return 1;
            return 0;
        }); 
    }
    res.send(movies);
};

const getMoviesById = (req, res) => {
    const { id } = req.params;
    const movie = movieModel.getMovieById(id);
    if (!movie) {
        return res.status(400).send({ message: 'Film nebol najdeny' });
    }
    res.send(movie);
};

const createMovie = (req, res) => {
    const { title, author, genre, publishedYear, sumary} = req.body;
    if (!title || !author || !genre || !publishedYear) {
        return res.status(400).send ({ message: 'Chybaju udeje o filme!' });
    }
    const newMovie = movieModel.createMovie({ title, author, genre, publishedYear, sumary});
    res.status(201).send(newMovie);
};

const updateMovie = (req, res) => {
    const { id } = req.param;
    const updates = req.body;

    const updateMovie = movieModel.updateMovie(id, updates);
    if (!updateMovie) {
        return res.stautus(404).send({ message: 'Film nebol najdeny' });
    }
    res.send(updateMovie);
};

const deleteMovie = (req, res) => {
    const { id } = req.param;
    const deleted = movieModel.deletedMovie(id);
    if (!deleted) {
        return res.status(404).send({ message: 'Film nebol najdeny' });
    }
    res.send({ message: 'Film bol uspesne zmazany!' });
};

module.exports = {getAllMovies, getMoviesById, updateMovie, createMovie, deleteMovie};