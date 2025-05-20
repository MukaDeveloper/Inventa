import { Module } from '@nestjs/common';
import { AppController } from './presentation/controllers/app.controller';
import { EventsController } from './presentation/controllers/events.controller';
import { ApplicationModule } from './application/application.module';
import { infrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [ApplicationModule, infrastructureModule],
  controllers: [AppController, EventsController],
  providers: [],
})
export class AppModule {}
