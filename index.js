import path from 'node:path';
import textExtensions from 'text-extensions';

const extensions = new Set(textExtensions);

export default function isTextPath(filePath) {
	return extensions.has(path.extname(filePath).slice(1).toLowerCase());
}
