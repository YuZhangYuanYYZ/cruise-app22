module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	env: {
		jest: true,
		browser: true,
		es2021: true,
		commonjs: true,
		es6: true,
	},
	extends: [
		'react-app',
		'plugin:react/recommended',
		'eslint:recommended',
		'plugin:react-hooks/recommended',
		'plugin:sonarjs/recommended',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'react/prop-types': ['off'],
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				printWidth: 80,
				tabWidth: 2,
				trailingComma: 'es5',
			},
		],
	},
};
