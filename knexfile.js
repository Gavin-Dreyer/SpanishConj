require('dotenv').config();

module.exports = {
	development: {
		client: 'pg',
		useNullAsDefault: false,
		connection: {
			database: process.env.DB_DEV_DATABASE,
			user: process.env.DB_DEV_USER
		},
		migrations: {
			directory: './data/migrations'
		}
	},

	staging: {
		client: 'pg',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},

	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL,
		migrations: {
			directory: './data/migrations'
		}
	},
	ssl: true
};
