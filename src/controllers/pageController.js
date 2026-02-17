const apiService = require('../services/apiService');

exports.getCollections = async (req, res) => {
    try {
        const fleet = await apiService.getFleet();
        res.render('collections', { fleet, title: 'Our Collections' });
    } catch (error) {
        res.render('collections', { fleet: [], title: 'Our Collections' });
    }
};

exports.getExperiences = (req, res) => {
    res.render('experiences', { title: 'Experiences' });
};

exports.getMembership = (req, res) => {
    res.render('membership', { title: 'Membership' });
};

exports.getConcierge = (req, res) => {
    res.render('concierge', { title: 'Concierge Service' });
};

exports.getAbout = (req, res) => {
    res.render('about', { title: 'About Us' });
};

exports.getContact = (req, res) => {
    res.render('contact', { title: 'Contact Us' });
};
