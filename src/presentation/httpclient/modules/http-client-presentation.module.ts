import { Module } from '@nestjs/common';
import { HttpClientController } from '../controllers/http-client.controller';
import { HttpClientApplicationModule } from '../../../application/commons/httpclient/modules/http-client-application.module';

@Module({
  imports: [HttpClientApplicationModule],
  controllers: [HttpClientController]
})
export class HttpClientPresentationModule {}
