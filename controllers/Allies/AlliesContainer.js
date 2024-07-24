const Allies = require('../../models/Allies/Allies');
const fs = require(`fs`);
const cloudinary = require(`cloudinary`).v2;

const getAllAllies = async (req, res) => {
    const allies = await Allies.find({});
    // console.log(allies);
    if(allies && allies.length > 0){
        return res.status(200).json(allies);
    }
    return res.status(400).json({error: 'No allies found'});
};

const createAllie = async (req, res) => {
    const {name: name, image: image, year: year, linkedIn: linkedIn, instagram: instagram} = req.body;
    if(!name || !image || !year) {
        return res.status(400).json({error: 'Please provide all the values'});
    }
    const allie = await Allies.create({name, image, year, linkedIn, instagram});
    // console.log(allie);
    return res.status(200).json({"allie": allie});
};

const deleteAllie = async (req, res) => {
    const {id} = req.body;
    const allie = await Allies.findOneAndDelete({_id: id});
    if(allie) {
        return res.status(200).json({message: 'Allie deleted successfully'});
    }
    return res.status(400).json({error: 'Allie not found'});
}

const uploadImage = async(req, res) => {
    if(!req.files || !req.files.image /*|| !req.files.image.tempFilePath*/) {
        return res.status(404).json({error: "No image in req.files"});
    }
    const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
        use_filename: true,
        folder: 'FineArts'
    });
    fs.unlinkSync(req.files.image.tempFilePath);
    Image = result.secure_url;
    return res.status(200).json({image: {src: result.secure_url}});
}

module.exports = {
    getAllAllies,
    createAllie,
    deleteAllie,
    uploadImage,
};