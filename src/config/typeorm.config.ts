import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeOrmConfig: TypeOrmModuleOptions = {
  // type: 'postgres',
  // host: 'localhost',
  // port: 5432,
  // username: 'postgres',
  // password: 'postgres',
  // database: 'usersManagement',
  // entities: [__dirname + '/../**/*.entity.ts'],
  // synchronize: true

  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'usersManagement',
  migrationsTableName: 'custom_migration_table',
  migrations: ['migration/*.js'],
  entities: ['dist/**/**.entity{.ts,.js}'],
  logging: true,
  cli: {
    migrationsDir: 'migration'
  }
};
