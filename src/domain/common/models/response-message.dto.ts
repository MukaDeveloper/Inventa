import { ApiProperty } from '@nestjs/swagger';
import { paginationDto } from './pagination.dto';

export class ResponseMessageDto<T> {
  @ApiProperty()
  statusCode!: number;
  @ApiProperty()
  message!: string;
  @ApiProperty()
  data!: T;
  @ApiProperty()
  url!: string;
  @ApiProperty()
  occurrenceData?: string;
  @ApiProperty()
  pagination?: paginationDto;

  constructor(init?: Partial<ResponseMessageDto<T>>) {
    Object.assign(this, init);
  }
}