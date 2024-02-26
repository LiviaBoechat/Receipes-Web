import { Sequelize } from 'sequelize';
import * as config from '../config/database';

const sequelize = new Sequelize(config as any);

export default sequelize;
