const router = require("express").Router();

const Users = require("../models/userModel");
const restricted = require("../middleware/restrictedMiddleware");

router.get("/", restricted, (req, res) => {
  const department = req.decodedToken.department;

  Users.findBy({ department })
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;