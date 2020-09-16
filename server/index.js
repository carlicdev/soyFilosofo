const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const app = express();

// Database
require('./db/db')

// Routes
const usersRouter = require('./routes/users');
const articlesRouter = require('./routes/articles');
const forumRouter = require('./routes/forum');

// Settings
app.set('PORT', process.env.PORT || 5000);

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));

// Serve React static files
app.use(express.static(path.join(__dirname, '../client/build')));

// Sessions
app.use(
    session({
        secret: 'unsecreto',
        resave: false,
        saveUninitialized: false
    })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Api
app.use('/api/users', usersRouter);
app.use('/api/articles', articlesRouter);
app.use('/api/forum', forumRouter);


app.listen(app.get('PORT'), () => {
    console.log(`Server on PORT: ${app.get('PORT')}`);
});