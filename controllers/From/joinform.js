const Form = require("../../models/Form/form");
const Newsletter = require("../../models/Form/newsletter");

exports.createFrom = (req, res) => {
    
  const form = new Form(req.body);
 form.save((err, data) => {
    if (err)
      return res.status(400).json({
        error: "Unable to save the Form!!",
        desc: err,
      });

    res.json(data);
  });
};

exports.createNewsletter = (req, res) => {

  console.log(req.body);
    
  const form = new Newsletter(req.body);
 form.save((err, data) => {
    if (err)
      return res.status(400).json({
        error: "Unable to save the Newsletter!!",
        desc: err,
      });

    res.json(data);
  });
};