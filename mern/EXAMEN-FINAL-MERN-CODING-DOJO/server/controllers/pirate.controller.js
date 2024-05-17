const Pirate = require('../models/pirate.model');

const pirateController = {
    create: async (req, res) => {
        try {
            const newPirate = await Pirate.create(req.body);
            res.status(201).json(newPirate);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create pirate', message: error.message });
        }
    },

    getAll: async (req, res) => {
        try {
            const pirates = await Pirate.find();
            res.status(200).json(pirates);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get pirates', message: 'Error retrieving pirates from the database' });
        }
    },

    getById: async (req, res) => {
        try {
            const pirate = await Pirate.findById(req.params.id);
            if (!pirate) {
                return res.status(404).json({ error: 'Pirate not found' });
            }
            res.status(200).json(pirate);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get pirate', message: 'Error retrieving pirate from the database' });
        }
    },

    updateById: async (req, res) => {
        try {
            const updatedPirate = await Pirate.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedPirate) {
                return res.status(404).json({ error: 'Pirate not found' });
            }
            res.status(200).json(updatedPirate);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update pirate', message: 'Error updating pirate in the database' });
        }
    },

    deleteById: async (req, res) => {
        try {
            const deletedPirate = await Pirate.findByIdAndDelete(req.params.id);
            if (!deletedPirate) {
                return res.status(404).json({ error: 'Pirate not found' });
            }
            res.status(200).json({ message: 'Pirate deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete pirate', message: 'Error deleting pirate from the database' });
        }
    }
};

module.exports = pirateController;