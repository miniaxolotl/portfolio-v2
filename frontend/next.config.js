// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./config/config');

module.exports = {
	reactStrictMode: true,
	images: {
	  	domains: config.host
	}
};
