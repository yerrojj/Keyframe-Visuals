const session = require('express-session');

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++$
// Session storage and database configuration
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++$
module.exports.pickEnv = (env, app) => {
    switch (env) {
        case 'dev':
            app.set('port', process.env.PORT || 3001);
            break;
    }
    
    // Set session and cookie max life, store session in mongo database
    require('dotenv').config(); // Load environment variables

    app.use(session({
        secret: process.env.SESSION_SECRET || 'fallbackSecretKey',
        resave: false,
        saveUninitialized: true
    })); // <-- This should be the correct closing bracket
};

module.exports.initializeVariable = (req, res, next) => {
    res.locals.session = req.session;
    res.locals.title   = "Keyframe Visuals";
    res.locals.node_environment = process.env.NODE_EN;

    next();
};

