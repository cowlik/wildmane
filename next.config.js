const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
	const basePath = phase === PHASE_PRODUCTION_BUILD && process.env.PREVIEW === '1' ? process.env.PREVIEW_BASE_PATH : '';

	return {
		basePath,
		reactStrictMode: true,
	};
};
