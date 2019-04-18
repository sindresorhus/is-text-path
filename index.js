'use strict';
const path = require('path');
const textExtensions = require('text-extensions');

const extensions = new Set(textExtensions);

module.exports = filepath => {
	return extensions.has(path.extname(filepath).slice(1).toLowerCase());
};
