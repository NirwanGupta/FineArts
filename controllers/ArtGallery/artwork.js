const Artwork = require("../../models/ArtGallery/artwork");

const { createContributor } = require("../HomePage/contributors");

//create artwork
exports.createartwork = (req, res) => {
  const artwork = new Artwork(req.body);
  artwork.save((err, data) => {
    if (err)
      return res.status(400).json({
        error: "Unable to save the artwork !!",
        desc: err,
      });

    createContributor(req.user._id, 5);
    res.json(data);
  });
};

//get all artwork
exports.getartwork = (req, res) => {
  Artwork.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      if (err) return res.status(500).json({ error: err });
    });
};

//get artwork by id
exports.getartworkbyId = (req, res) => {
  Artwork.findById(req.params.artworkId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      if (err) return res.status(500).json({ error: err });
    });
};

//update a artwork
exports.updateartwork = async (req, res) => {
  let artwork;
  try {
    artwork = await Artwork.findByIdAndUpdate(
      req.params.artworkId,
      { $set: req.body },
      { new: true }
    );
    if (!artwork) return res.status(400).json({ error: "artwork not found !!" });
  } catch (err) {
    res.status(400).json({ error: err });
  }
  res.status(202).json({
    msg: "artwork Updated !!",
    desc: artwork,
  });
};

//delete a artwork
exports.deleteartwork = (req, res) => {
  Artwork.findByIdAndRemove(req.params.artworkId)
    .then((artwork) => {
      if (!artwork) return res.status(400).json({ error: "artwork not found !!" });
      res.status(200).json(artwork);
    })
    .catch((err) => {
      if (err)
        return res.status(500).json({ error: "artwork not found !!", desc: err });
    });
};
