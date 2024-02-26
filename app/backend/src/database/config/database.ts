import { Options } from 'sequelize';

const config: Options = {
  username: 'postgres',
  password: 'BACK@recipes24',
  database: 'postgres',
  host: 'db.rtpoziwmyvjihhsfomym.supabase.co',
  port: 5432,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

export = config;
