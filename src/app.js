const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const compression = require('compression');
const homeController = require('./controllers/homeController');
const pageController = require('./controllers/pageController');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(compression()); // Compress all responses
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Optimized static files with caching
const oneDay = 86400000;
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: oneDay
}));

// Set View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', homeController.getIndex);
app.get('/collections', pageController.getCollections);
app.get('/experiences', pageController.getExperiences);
app.get('/membership', pageController.getMembership);
app.get('/concierge', pageController.getConcierge);
app.get('/about', pageController.getAbout);
app.get('/contact', pageController.getContact);
app.get('/car/:id', pageController.getCarDetail);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
