const Sponsor = require('../../models/Sponsors/Sponsors');

const getAllSponsors = async (req, res) => {
    const sponsors = await Sponsor.find({});
    res.status(200).json({sponsors});
};

const getSingleSponsor = async (req, res) => {
    const sponsor = await Sponsor.findOne({_id: req.params.id});
    if(!sponsor) {
        return res.status(404).json({message: 'Sponsor not found'});
    }
    res.status(200).json({sponsor});
};

const createSponsor = async (req, res) => {
    const {name, image, description} = req.body;
    const sponsor = await Sponsor.create({name, image, description});
    res.status(201).json({sponsor});
};

const updateSponsor = async (req, res) => {
    const {name, image, description} = req.body;
    const sponsor = await Sponsor.findOne({_id: req.params.id});
    sponsor.name = name || sponsor.name;
    sponsor.image = image || sponsor.image;
    sponsor.description = description || sponsor.description;
    await sponsor.save();
    res.status(200).json({sponsor});
};

const deleteSponsor = async (req, res) => {
    const sponsor = await Sponsor.findOneAndDelete({_id: req.params.id});
    res.status(200).json({message: 'Sponsor deleted'});
};

module.exports = {
    getAllSponsors,
    getSingleSponsor,
    createSponsor,
    updateSponsor,
    deleteSponsor
}