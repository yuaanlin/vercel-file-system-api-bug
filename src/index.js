const fs = require('fs');

module.exports = {
	default: (_req, res) => {
		const data = fs.readFileSync('my-folder/data.txt');
		res.end(data);
	}
}