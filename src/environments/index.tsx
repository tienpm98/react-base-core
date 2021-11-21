let config

switch (process.env.NODE_ENV) {
	case 'production':
		config = require('./production')
		break
	case 'development':
	default:
		config = require('./development')
}

export default config
