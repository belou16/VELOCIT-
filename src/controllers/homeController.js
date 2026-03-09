const apiService = require('../services/apiService');

exports.getIndex = async (req, res) => {
    try {
        const fleet = await apiService.getFleet();
        res.render('index', {
            fleet,
            title: 'Timeless 1960s Italian Elegance',
            metaDescription: 'Rent iconic 1960s Italian classics with a premium concierge experience. Ferrari, Lamborghini, Maserati and Alfa Romeo legends.',
            metaKeywords: 'luxury car rental, vintage Italian cars, Ferrari 250 GTO, Lamborghini Miura, classic car concierge'
        });
    } catch (error) {
        console.error('Error loading page:', error);
        res.render('index', {
            fleet: [],
            title: 'Timeless 1960s Italian Elegance',
            metaDescription: 'Discover VELOCITa and explore a curated archive of Italian classic cars from the 1960s.'
        });
    }
};
