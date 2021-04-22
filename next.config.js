const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
	const isProduction = phase === PHASE_PRODUCTION_BUILD && process.env.PREVIEW !== '1';
	const basePath = !isProduction ? process.env.BASE_PATH_PREVIEW : process.env.BASE_PATH;

	return {
		env: {
			facebookId: !isProduction ? '2950401105207979' : '468122234433495',
			serverDomain: !isProduction ? 'http://preview.cowlik.com/wildmane' : 'http://wildmanestudio.com',
			googleAnalyticsId: !isProduction ? 'G-FP75V5XK0D' : 'G-7B8JH5TXLS',
		},
		basePath,
		reactStrictMode: true,
	};
};
