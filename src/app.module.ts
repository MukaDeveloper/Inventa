import { Module } from '@nestjs/common';
import { AppController } from './presentation/controllers/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from 'process';
import { HandleEventUseCase } from './application/use-cases/handle-event.usecase';
import { EventsController } from './presentation/controllers/events.controller';

const synchronize = env.NODE_ENV !== 'production';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: env.DB_HOST || 'localhost',
      port: 5432,
      username: env.DB_USER,
      password: env.DB_PASSWORD,
      database: env.DB_NAME,
      autoLoadEntities: true,
      synchronize,
    }),
  ],
  controllers: [AppController, EventsController],
  providers: [HandleEventUseCase],
})
export class AppModule {}
