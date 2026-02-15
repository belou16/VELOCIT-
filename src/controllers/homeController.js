const apiService = require('../services/apiService');

exports.getIndex = async (req, res) => {
    try {
        const fleet = await apiService.getFleet();
        res.render('index', { fleet });
    } catch (error) {
        console.error('Error loading page:', error);
        res.render('index', { fleet: [] });
    }
};
