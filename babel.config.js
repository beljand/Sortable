module.exports = function(api) {
	api.cache(true);

	let presets;

	if (process.env.NODE_ENV === 'es') {
		presets = [
			[
				"@babel/preset-env",
				{
					"modules": false,
					"mangle": false,
					"noMangle": true
				}
			]
		];
	} else if (process.env.NODE_ENV === 'umd') {
		presets = [
			[
				"@babel/preset-env"
			]
		];
	}

	return {
		plugins: ['@babel/plugin-transform-object-assign'],
		presets
	};
};
