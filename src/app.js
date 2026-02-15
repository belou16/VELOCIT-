const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const homeController = require('./controllers/homeController');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', homeController.getIndex);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
