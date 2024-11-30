const notFound = (req, res) =>
  res.status(404).send(`No route found for ${req}`);

module.exports = notFound;
