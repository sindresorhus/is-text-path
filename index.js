'use strict';
var path = require('path');
var textExtensions = require('text-extensions');
var exts = Object.create(null);

textExtensions.forEach(function (el) {
	exts[el] = true;
});

module.exports = function (filepath) {
	var ext = path.extname(filepath).slice(1);

	if (ext === '') {
		return false;
	}

	return ext in exts;
};
