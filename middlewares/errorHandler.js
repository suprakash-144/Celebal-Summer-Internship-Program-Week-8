const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: "Something went wrong!",
    error: err.message,
  });
};

module.exports = errorHandler;
