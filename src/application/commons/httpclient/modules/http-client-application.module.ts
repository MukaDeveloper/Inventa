import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { HttpClientService } from '../services/http-client.service';
import { ErrorFormatterService } from '../../../../domain/common/services/error-formatter.service';
import { HttpClientDeleteService } from '../../../../infrastructure/commons/httpclient/services/http-client-delete.service';
import { HttpClientGetService } from '../../../../infrastructure/commons/httpclient/services/http-client-get.service';
import { HttpClientPathService } from '../../../../infrastructure/commons/httpclient/services/http-client-path.service';
import { HttpClientPostService } from '../../../../infrastructure/commons/httpclient/services/http-client-post.service';
import { HttpClientPutService } from '../../../../infrastructure/commons/httpclient/services/http-client-put.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000, // Timeout for HTTP requests
      maxRedirects: 5, // Maximum number of redirects
    })
  ],
 providers: [
    { provide: 'IHttpClientDeleteService', useClass: HttpClientDeleteService },
    { provide: 'IHttpClientGetService', useClass: HttpClientGetService },
    { provide: 'IHttpClientPathService', useClass: HttpClientPathService },
    { provide: 'IHttpClientPostService', useClass: HttpClientPostService },
    { provide: 'IHttpClientPutService', useClass: HttpClientPutService },
    HttpClientService,
    ErrorFormatterService
  ],
  exports: [HttpClientService]
})
export class HttpClientApplicationModule {}
