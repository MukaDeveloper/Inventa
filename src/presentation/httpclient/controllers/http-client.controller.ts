import {
  Body,
  Controller,
  Post,
  BadRequestException,
  InternalServerErrorException
} from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOperation
} from '@nestjs/swagger';
import { HttpClientService } from '../../../application/commons/httpclient/services/http-client.service';
import { HttpContextDto } from '../../../domain/common/httpclient/models/http-client-context.dto';
import { ResponseMessageDto } from '../../../domain/common/models/response-message.dto';

@ApiTags('Http Client')
@Controller('http-client')
export class HttpClientController {
  constructor(private readonly httpClientService: HttpClientService) {}

  @Post('request')
  @ApiOperation({ summary: 'Executa uma requisição HTTP com base no método informado.' })
  @ApiOkResponse({
    description: 'Requisição executada com sucesso.',
    type: ResponseMessageDto<any>
  })
  @ApiBadRequestResponse({
    description: 'Método HTTP inválido ou dados de entrada incorretos.'
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno ao executar a requisição.'
  })
  async handleRequest(
    @Body() context: HttpContextDto
  ): Promise<ResponseMessageDto<any>> {
    const method = context.method?.toUpperCase();

    try {
      switch (method) {
        case 'GET':
          return this.httpClientService.get(context);
        case 'POST':
          return this.httpClientService.post(context);
        case 'PUT':
          return this.httpClientService.put(context);
        case 'PATCH':
          return this.httpClientService.patch(context);
        case 'DELETE':
          return this.httpClientService.delete(context);
        default:
          throw new BadRequestException(`Unsupported method: ${method}`);
      }
    } catch (error) {
      console.error('[HttpClientController] Request failed:', error);
      throw new InternalServerErrorException('Erro ao executar a requisição HTTP.');
    }
  }
}
