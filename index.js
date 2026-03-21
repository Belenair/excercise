const express = require('express');
const moviesRouter = require('./src/routes/movieRouter');
const bookRouter = require('./src/routes/bookRouter');
const loggerMiddleware = require('./src/middleware/logMiddleware');
require('dotenv').config();

const PORT = process.env.PORT
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(loggerMiddleware);

app.get("/", (req, res) => {
    res.send({ message: "Vitaj na nasej webovej stranke s filmami a knihalmi!" });
});

app.use('/movies', moviesRouter);
app.use('/books', bookRouter);

app.use((req, res) => {
    res.status(404).send({ message: "Umss! Nieco sa nepodarilo!" });
});

app.listen(PORT, () => {
    console.log(`Server bezi na porte ${PORT}!`);
});

 