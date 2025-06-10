import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EventsPresentationModule } from './presentation/events/modules/events-presentation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestContextModule } from './domain/common/request/request-context.module';
import { DataSourceFactory } from './infrastructure/database/data-source.factory';
import { rabbitMqProvider } from './infrastructure/messaging/rabbitmq.provider';
import { HttpClientApplicationModule } from './application/commons/httpclient/modules/http-client-application.module';
import { HttpClientPresentationModule } from './presentation/httpclient/modules/http-client-presentation.module';
import { HttpClientInfrastructureModule } from './infrastructure/commons/httpclient/modules/http-client-infrastructure.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', // .${process.env.NODE_ENV || 'development'}',
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return DataSourceFactory.create(config).options;
      },
    }),
    EventsPresentationModule,
    HttpClientApplicationModule,
    HttpClientInfrastructureModule,
    HttpClientPresentationModule,
    RequestContextModule,
  ],
  providers: [rabbitMqProvider],
})
export class AppModule {}
