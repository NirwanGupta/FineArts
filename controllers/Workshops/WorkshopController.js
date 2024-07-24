const Workshop = require("../../models/Workshop/Workshop");

const createWorkShop = async (req, res) => {
    const {image, name, description, mentoredBy} = req.body;
    const workshop = await Workshop.create({image, name, description, mentoredBy});
    res.status(200).json({workshop});
};

const getAllWorkshops = async (req, res) => {
    const workshops = await Workshop.find({});
    res.status(201).json({workshops, count: workshops.length});
};

const getSingleWorkshop = async (req, res) => {
    const {id: workshopId} = req.params;
    if(!workshopId) {
        throw new Error("Please provide Id");
    }
    const workshop = await Workshop.findOne({_id: workshopId});
    res.status(201).json({workshop});
};

const updateWorkshop = async (req, res) => {
    const {id: workshopId} = req.params;
    if(!workshopId) {
        throw new Error("Please provide Id");
    }
    const {image, name, description, mentoredBy} = req.body;
    const workshop = await Workshop.findOneAndUpdate({_id: workshopId},{image, name, description, mentoredBy}, {
        runValidators: true,
        new: true,
    });
    res.status(201).json({workshop});
};

const deleteWorkshop = async (req, res) => {
    const {id: workshopId} = req.params;
    if(!workshopId) {
        throw new Error("Please provide Id");
    }
    const workshop = await Workshop.findOneAndDelete({_id: workshopId});
    res.status(201).json({msg: "Workshop deleted successfully"});
};

module.exports = {
    createWorkShop,
    getAllWorkshops,
    getSingleWorkshop,
    updateWorkshop,
    deleteWorkshop,
};