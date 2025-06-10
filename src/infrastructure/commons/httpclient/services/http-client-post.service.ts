import { Injectable, HttpException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';
import { IHttpClientPostService } from '../../../../domain/common/httpclient/interfaces/http-client-post.interface';
import { HttpContextDto } from '../../../../domain/common/httpclient/models/http-client-context.dto';
import { ErrorFormatterService } from '../../../../domain/common/services/error-formatter.service';
import { ResponseMessageDto } from '../../../../domain/common/models/response-message.dto';

@Injectable()
export class HttpClientPostService implements IHttpClientPostService {
  constructor(private readonly httpService: HttpService, private readonly errorFormatter: ErrorFormatterService) {}

  async sendRequest(context: HttpContextDto): Promise<ResponseMessageDto<any>> {
    
    try {
    
      const response: AxiosResponse = await lastValueFrom(
        this.httpService.post(context.url, context.body || {}, {
          headers: context.headers || {},
          params: context.params || {},
          timeout: Number.parseInt(process.env.HTTP_TIMEOUT || "30000"),
          maxBodyLength: Infinity
        }),
      );

      return new ResponseMessageDto<any>({
        statusCode: response.status,
        message: 'Request successful',
        data: response.data,
        occurrenceData: new Date().toISOString(),
        url: context.url,
      });

    } catch (error: any) {
      
      const status = error.response?.status || 500;
      const formattedMessage = this.errorFormatter.format(error, context.url);

      throw new HttpException(
        new ResponseMessageDto<any>({
          statusCode: status,
          message: formattedMessage,
          data: error,
          occurrenceData: new Date().toISOString(),
          url: context.url,
        }),
        status,
      );

    }
  }
}
