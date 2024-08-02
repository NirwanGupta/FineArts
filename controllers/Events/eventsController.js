const Events = require(`../../models/Events/Events`);

const getAllEvents = async (req, res) => {
    const events = await Events.find({});
    res.status(200).json({ events });
};

const getSingleEvents = async (req, res) => {
    const { id } = req.params;
    if(!id) {
        res.status(400).json({ message: `Please provide an id` });
    }
    const event = await Events.find({_id: id});
    if(!event) {
        res.status(404).json({ message: `Event with id ${id} not found` });
    }
    res.status(200).json({ event });
};

const createEvents = (req, res) => {
    const {name, image} = req.body;
    const newEvent = new Events.create({name, image});
    res.status(201).json({ newEvent });
};

const updateEvents = async (req, res) => {
    const {id} = req.params;
    if(!id) {
        res.status(400).json({ message: `Please provide an id` });
    }
    const {name, image} = req.body;
    const event = await Events.findOne({_id: id});
    if(!event) {
        res.status(404).json({ message: `Event with id ${id} not found` });
    }
    event.name = name;
    event.image = image;
    await event.save();
    res.status(200).json({ event });
};

const deleteEvents = async (req, res) => {
    const {id} = req.params;
    if(!id) {
        res.status(400).json({ message: `Please provide an id` });
    }
    const event = await Events.findOneAndDelete({_id: id});
    res.status(200).json({ message: `Event with id ${id} deleted` });
};

module.exports = {
    getAllEvents,
    getSingleEvents,
    createEvents,
    updateEvents,
    deleteEvents,
};