const apiService = require('../services/apiService');

exports.getCollections = async (req, res) => {
    try {
        const fleet = await apiService.getFleet();
        res.render('collections', {
            fleet,
            title: 'Collections',
            metaDescription: 'Browse our full vintage collection of 1960s Italian icons with live brand filters and premium detail pages.',
            metaKeywords: 'classic car collection, 1960s Ferrari, Lamborghini Miura rental, Maserati classics, Alfa Romeo vintage'
        });
    } catch (error) {
        res.render('collections', {
            fleet: [],
            title: 'Collections',
            metaDescription: 'Browse our curated collection of Italian classic cars.'
        });
    }
};

exports.getExperiences = (req, res) => {
    res.render('experiences', {
        title: 'Experiences',
        metaDescription: 'Discover curated driving adventures across the most legendary Italian roads and alpine routes.'
    });
};

exports.getMembership = (req, res) => {
    res.render('membership', {
        title: 'Membership',
        metaDescription: 'Join the VELOCITa membership and unlock privileged access to rare Italian classics and private events.'
    });
};

exports.getConcierge = (req, res) => {
    res.render('concierge', {
        title: 'Concierge Service',
        metaDescription: 'White-glove concierge services for delivery, support and route curation across Italy.'
    });
};

exports.getAbout = (req, res) => {
    res.render('about', {
        title: 'About Us',
        metaDescription: 'Learn the story behind VELOCITa and our passion for preserving 1960s Italian automotive heritage.'
    });
};

exports.getContact = (req, res) => {
    res.render('contact', {
        title: 'Contact Us',
        metaDescription: 'Contact VELOCITa to reserve your classic car and plan a bespoke Italian driving experience.'
    });
};

exports.getCarDetail = async (req, res) => {
    try {
        const car = await apiService.getCarById(req.params.id);
        if (!car) {
            return res.status(404).render('404', {
                title: 'Car Not Found',
                metaDescription: 'The requested vehicle could not be found in our archive.'
            });
        }
        res.render('car-detail', {
            car,
            title: `${car.name}`,
            metaDescription: `${car.name} (${car.year}) - ${car.model}. Discover pricing, location and concierge booking details.`,
            ogImage: car.image
        });
    } catch (error) {
        res.status(500).render('404', {
            title: 'Server Error',
            metaDescription: 'An unexpected error occurred while loading the car details.'
        });
    }
};
