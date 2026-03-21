const authMiddleware = (req, res, next) => {
    const isAuthenticated = true;
    if (!isAuthenticated) {
        return res.status(401).send({ message: 'Neautorizovany pristup!'});
    }
    console.log('Autorizacia: OK');
    next();
};

module.exports = authMiddleware;