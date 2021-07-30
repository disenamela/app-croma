// next.config.js
const path = require('path');
const withImages = require('next-images');
module.exports = withImages({
	future: {
		webpack5: true,
	}
});
