import { Inject, Injectable } from '@nestjs/common';
import { IHttpClientDeleteService } from '../../../../domain/common/httpclient/interfaces/http-client-delete.interface';
import { IHttpClientGetService } from '../../../../domain/common/httpclient/interfaces/http-client-get.interface';
import { IHttpClientPathService } from '../../../../domain/common/httpclient/interfaces/http-client-path.interface';
import { IHttpClientPostService } from '../../../../domain/common/httpclient/interfaces/http-client-post.interface';
import { IHttpClientPutService } from '../../../../domain/common/httpclient/interfaces/http-client-put.interface';
import { HttpContextDto } from '../../../../domain/common/httpclient/models/http-client-context.dto';
import { ResponseMessageDto } from '../../../../domain/common/models/response-message.dto';

@Injectable()
export class HttpClientService {
  constructor(
    @Inject('IHttpClientGetService') private readonly getService: IHttpClientGetService,
    @Inject('IHttpClientPostService') private readonly postService: IHttpClientPostService,
    @Inject('IHttpClientPutService') private readonly putService: IHttpClientPutService,
    @Inject('IHttpClientPathService') private readonly patchService: IHttpClientPathService,
    @Inject('IHttpClientDeleteService') private readonly deleteService: IHttpClientDeleteService,
  ) {}

  async get(context: HttpContextDto): Promise<ResponseMessageDto<any>> {
    return this.getService.sendRequest(context);
  }

  async post(context: HttpContextDto): Promise<ResponseMessageDto<any>> {
    return this.postService.sendRequest(context);
  }

  async put(context: HttpContextDto): Promise<ResponseMessageDto<any>> {
    return this.putService.sendRequest(context);
  }

  async patch(context: HttpContextDto): Promise<ResponseMessageDto<any>> {
    return this.patchService.sendRequest(context);
  }

  async delete(context: HttpContextDto): Promise<ResponseMessageDto<any>> {
    return this.deleteService.sendRequest(context);
  }
}
