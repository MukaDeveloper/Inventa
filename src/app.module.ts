import { Module } from '@nestjs/common';
import { AppController } from './presentation/controllers/app.controller';
import { EventsController } from './presentation/controllers/events.controller';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [ApplicationModule],
  controllers: [AppController, EventsController],
  providers: [],
})
export class AppModule {}
