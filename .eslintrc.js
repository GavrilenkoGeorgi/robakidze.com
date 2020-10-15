module.exports = {
	'plugins': [
		'html'
	],
	'settings': {
		'html/report-bad-indent': 'error'
	},
	'env': {
		'node': true,
		'es6': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'globals': {
		'window': true
	},
	'rules': {
		'indent': ['error', 'tab'],
		'no-trailing-spaces': [1, { 'skipBlankLines': false }],
		'no-multiple-empty-lines': ['error', { 'max': 1}],
		'no-multi-spaces': 'error',
		'padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }],
		'no-extra-parens': 'error',
		'semi': ['error', 'never'],
		'comma-dangle': ['error', 'never'],
		'no-console': 'off',
		'generator-star-spacing': 'off',
		'max-len': ['error', { 'code': 120 }],
		'spaced-comment': ['error', 'always', {
			'line': {
				'markers': ['/'],
				'exceptions': ['-', '+']
			},
			'block': {
				'markers': ['!'],
				'exceptions': ['*'],
				'balanced': true
			}
		}]
	}
}
