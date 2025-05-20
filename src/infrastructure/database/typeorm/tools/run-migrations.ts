import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from '../../../../app.module';
import { DataSourceFactory } from '../data-source.factory';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const config = app.get(ConfigService);

  const dataSource = DataSourceFactory.create(config);
  await dataSource.initialize();
  await dataSource.runMigrations();

  console.log('✅ Migrations applied.');
  await app.close();
}

bootstrap();
