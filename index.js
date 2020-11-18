const express = require('express');
const morgan = require('morgan');
const app = express();

const router = require('./routes/profile');

// Load env
require('dotenv').config();

// port
const port = process.env.PORT || 5000;

// Dev logging
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use('/api/v1', router.profile);

app.listen(port, () => {
	console.log(`Server is running in ${process.env.NODE_ENV} on http://localhost:${port}`);
});
