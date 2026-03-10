const { v4: uuid } = require("uuid");

let movies = [
  {
    id: uuid(),
    title: "Neon Run",
    author: "A. Rivera",
    genre: "Sci-Fi",
    publishedYear: "2017",
    summary: "A courier discovers a hidden signal that can rewrite city systems.",
  },
  {
    id: uuid(),
    title: "Maple Street Secrets",
    author: "K. Novak",
    genre: "Mystery",
    publishedYear: "2021",
    summary: "Neighbors piece together clues after a local musician vanishes.",
  },
  {
    id: uuid(),
    title: "Paper Moonlight",
    author: "D. Carter",
    genre: "Romance",
    publishedYear: "2014",
    summary: "Two writers reconnect through anonymous notes left in old books.",
  },
  {
    id: uuid(),
    title: "Terminal Velocity",
    author: "M. Singh",
    genre: "Action",
    publishedYear: "2019",
    summary: "A retired pilot is forced into one last mission across hostile borders.",
  },
  {
    id: uuid(),
    title: "Quiet Harbor",
    author: "L. Petrov",
    genre: "Drama",
    publishedYear: "2023",
    summary: "A family returns to their coastal hometown to restore a closed cinema.",
  }
];

const getAllMovies = () => {
  return movies;
};

const getMovieById = (id) => {
  return movies.find(movie => movie.id === id);
};

const createMovie = ({ title, author, genre, publishedYear, summary }) => {
  const newMovie = {id:uuid(), title, author, genre, publishedYear, summary};
  movies.push(newMovie);
  return newMovie; 
};

const updateMovie = (id, { title, author, genre, publishedYear, summary }) => {
  const movie = getMovieById(id);
  if (!movie) {
    return { ok: false, message: "This request cannot be completed!"};  
  }
  if (title) movie.title = title;
  if (author) movie.author = author;
  if (genre) movie.genre = genre;
  if (publishedYear) movie.publishedYear = publishedYear;
  if (summary) movie.summary = summary;

  return { ok: true, message: "Movie updated!", data: movie}
};

const deleteMovie = (id) => {
    const movieIndex = movies.findIndex(movie => movie.id === id);
    if (movieIndex === -1) {
        return false;
    }
    movies.splice(movieIndex, 1);
    return true;
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
