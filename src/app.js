const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const compression = require('compression');
const homeController = require('./controllers/homeController');
const pageController = require('./controllers/pageController');
const apiService = require('./services/apiService');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(compression()); // Compress all responses
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic security/perf headers for production-friendly responses.
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'geolocation=(), camera=(), microphone=()');
    next();
});

// Optimized static files with caching
const oneDay = 86400000;
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: oneDay
}));

// Set View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
    const siteName = 'VELOCITa';
    const baseUrl = process.env.SITE_URL || `http://localhost:${PORT}`;
    const cleanBaseUrl = baseUrl.replace(/\/$/, '');

    res.locals.siteName = siteName;
    res.locals.baseUrl = cleanBaseUrl;
    res.locals.currentUrl = `${cleanBaseUrl}${req.originalUrl}`;
    res.locals.metaDescription = 'Luxury vintage car rentals inspired by 1960s Italian design. Explore Ferrari, Lamborghini, Maserati and Alfa Romeo icons.';
    res.locals.metaKeywords = 'vintage cars, Italian classics, Ferrari rental, Lamborghini rental, Maserati, Alfa Romeo, 1960s cars';
    res.locals.ogImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/1963_Ferrari_250_GTO_%28chassis_4153GT%29_2.95.jpg/1280px-1963_Ferrari_250_GTO_%28chassis_4153GT%29_2.95.jpg';
    next();
});

// Routes
app.get('/', homeController.getIndex);
app.get('/collections', pageController.getCollections);
app.get('/experiences', pageController.getExperiences);
app.get('/membership', pageController.getMembership);
app.get('/concierge', pageController.getConcierge);
app.get('/about', pageController.getAbout);
app.get('/contact', pageController.getContact);
app.get('/car/:id', pageController.getCarDetail);

app.get('/robots.txt', (req, res) => {
    const baseUrl = (process.env.SITE_URL || `http://localhost:${PORT}`).replace(/\/$/, '');
    res.type('text/plain');
    res.send(`User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`);
});

app.get('/sitemap.xml', async (req, res) => {
    try {
        const baseUrl = (process.env.SITE_URL || `http://localhost:${PORT}`).replace(/\/$/, '');
        const fleet = await apiService.getFleet();
        const staticRoutes = ['/', '/collections', '/experiences', '/membership', '/concierge', '/about', '/contact'];
        const carRoutes = fleet.map((car) => `/car/${car.id}`);
        const allRoutes = [...staticRoutes, ...carRoutes];

        const urls = allRoutes
            .map((route) => `<url><loc>${baseUrl}${route}</loc><changefreq>weekly</changefreq><priority>${route === '/' ? '1.0' : '0.8'}</priority></url>`)
            .join('');

        const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
        res.type('application/xml');
        res.send(xml);
    } catch (error) {
        res.status(500).type('application/xml').send('<?xml version="1.0" encoding="UTF-8"?><error>Unable to generate sitemap</error>');
    }
});

app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Page Not Found',
        metaDescription: 'The page you requested was not found on VELOCITa.'
    });
});

app.use((error, req, res, next) => {
    console.error('Unhandled server error:', error);
    res.status(500).render('404', {
        title: 'Server Error',
        metaDescription: 'An unexpected error occurred. Please try again.'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
