const Promise = require('bluebird');
const marked = require('marked');

const plugin = (plugin, markserv) => (includePath, includeData, domNode) => new Promise((resolve, reject) => {
	markserv.helpers.readfile(includePath)
	.then(markdownText => {
		marked(markdownText, (err, data) => {
			if (err) {
				return reject(err);
			}

			resolve(data);
		});
	}).catch(reject);
});

module.exports = {
	name: 'markserv-contrib-inc.markdown',

	// `plugin` function responds to an include
	// and must main MUST always returns a promise
	plugin
};
