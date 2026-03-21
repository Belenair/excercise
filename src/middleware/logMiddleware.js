const loggerMiddleware = (req, res, next) => {
    console.log(`Poziadavka typu ${req.method} prisla ma URL: ${req.originalUrl}`);
    next();
};

module.exports = loggerMiddleware;