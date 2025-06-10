import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

export class DataSourceFactory {
  static create(config: ConfigService): DataSource {
    const isTsNode = process.argv.some((arg) => arg.includes('ts-node'));

    const options: DataSourceOptions = {
      type: 'postgres',
      host: config.get('POSTGRES_HOST'),
      port: Number(config.get('POSTGRES_PORT')),
      username: config.get('POSTGRES_USER'),
      password: config.get('POSTGRES_PASSWORD'),
      database: config.get('POSTGRES_DB'),
      synchronize: false,
      migrations: [
        isTsNode
          ? 'src/infrastructure/database/migration/*.ts'
          : 'dist/infrastructure/database/migration/*.js',
      ],
      entities: [isTsNode ? 'src/**/*.entity.ts' : 'dist/**/*.entity.js'],
    };

    return new DataSource(options);
  }
}
