import { User } from '../user/domain/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import path from "path";

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: Number(process.env.POSTGRES_PORT),
  database: 'projeto',
  username: 'postgres',
  password: 'pg_password',
  entities: [User],
  synchronize: true,
  logging: true,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
