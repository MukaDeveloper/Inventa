import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { HttpClientDeleteService } from '../services/http-client-delete.service';
import { HttpClientGetService } from '../services/http-client-get.service';
import { HttpClientPathService } from '../services/http-client-path.service';
import { HttpClientPostService } from '../services/http-client-post.service';
import { HttpClientPutService } from '../services/http-client-put.service';
import { ErrorFormatterService } from '../../../../domain/common/services/error-formatter.service';

@Module({
  imports: [HttpModule],
  providers: [
    { provide: 'IHttpClientDeleteService', useClass: HttpClientDeleteService},
    { provide: 'IHttpClientGetService', useClass: HttpClientGetService},
    { provide: 'IHttpClientPathService', useClass: HttpClientPathService},
    { provide: 'IHttpClientPostService', useClass: HttpClientPostService},
    { provide: 'IHttpClientPutService', useClass: HttpClientPutService},
    ErrorFormatterService
  ],
  exports: [
    'IHttpClientDeleteService',
    'IHttpClientGetService',
    'IHttpClientPathService',
    'IHttpClientPostService',
    'IHttpClientPutService',
    ErrorFormatterService
  ],
})
export class HttpClientInfrastructureModule {}
