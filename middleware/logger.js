// @desc    Logs request to console
const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
  );
  // next() is used to move on to the next
  // piece of middleware in the cycle
  next();
};

module.exports = logger;
