function inputCleaner(req, res, next) {
  if (req.body && req.body.username) {
    req.body.username = req.body.username.toLowerCase();
  }
  if (req.body && req.body.comment) {
    // Elimina cualquier etiqueta HTML del comentario
    req.body.comment = req.body.comment.replace(/<[^>]*>/g, '');
  }
  next();
}

function inputValidator(req, res, next) {
  if (req.body && req.body.username && req.body.username.length >= 3) {
    next();
  } else {
    res.redirect("/form?error=Username must be at least 3 characters.");
  }
}

module.exports = {
  inputCleaner,
  inputValidator
};
