const MediaPartners = require('../../models/MediaPartners/MediaPartners');

const getAllMediaPartners = async (req, res) => {
    const mediaPartners = await MediaPartners.find({});
    res.status(200).json({mediaPartners});
};

const getSingleMediaPartners = async (req, res) => {
    const mediaPartners = await MediaPartners.findOne({_id: req.params.id});
    if(!mediaPartners) {
        return res.status(404).json({message: 'Sponsor not found'});
    }
    res.status(200).json({mediaPartners});
};

const createMediaPartners = async (req, res) => {
    const {name, image, description} = req.body;
    const mediaPartners = await MediaPartners.create({name, image, description});
    res.status(201).json({mediaPartners});
};

const updateMediaPartners = async (req, res) => {
    const {name, image, description} = req.body;
    const mediaPartners = await MediaPartners.findOne({_id: req.params.id});
    mediaPartners.name = name || mediaPartners.name;
    mediaPartners.image = image || mediaPartners.image;
    mediaPartners.description = description || mediaPartners.description;
    await mediaPartners.save();
    res.status(200).json({mediaPartners});
};

const deleteMediaPartners = async (req, res) => {
    const mediaPartners = await MediaPartners.findOneAndDelete({_id: req.params.id});
    res.status(200).json({message: 'Sponsor deleted'});
};

module.exports = {
    getAllMediaPartners, 
    getSingleMediaPartners, 
    createMediaPartners,
    updateMediaPartners,
    deleteMediaPartners
};