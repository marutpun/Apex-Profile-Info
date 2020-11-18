const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/:platform/:player', async (req, res) => {
	try {
		const { platform, player } = req.params;

		const headers = {
			'TRN-Api-Key': process.env.TRACKER_API,
		};

		const response = await fetch(`${process.env.TRACKER_URI}/${platform}/${player}`, { headers });

		const data = await response.json();

		if (data.errors && data.errors.length > 0) {
			return res.status(404).json({
				message: `Profile Not Found`,
			});
		}

		res.json(data);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			message: `Server error`,
		});
	}
});

module.exports.profile = router;
