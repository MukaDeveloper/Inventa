import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

export class DataSourceFactory {
  static create(config: ConfigService): DataSource {

    const isTsNode = process.argv.some(arg => arg.includes('ts-node'));

    const options: DataSourceOptions = {
      type: 'postgres',
      host: config.get('DB_HOST'),
      port: Number(config.get('DB_PORT')),
      username: config.get('DB_USERNAME'),
      password: config.get('DB_PASSWORD'),
      database: config.get('DB_DATABASE'),
      synchronize: false,
      migrations: [isTsNode ? 'src/infrastructure/database/typeorm/migration/*.ts' : 'dist/infrastructure/database/typeorm/migration/*.js'],
      entities: [isTsNode ? 'src/**/*.entity.ts' : 'dist/**/*.entity.js'],
    };

    return new DataSource(options);
  }
}
