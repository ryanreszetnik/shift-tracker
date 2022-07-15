import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'shift-scheduler',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: true,
};

export default config;
