import { ApiProperty } from '@nestjs/swagger';
import { EEventType } from '../enumerators/event-type.enum';
import { IsDefined, IsNotEmptyObject, IsObject } from 'class-validator';

export class ReceiveEventDTO {
  @ApiProperty({
    description: 'Tipo do evento',
    example: EEventType.HEALT_CHECK,
    enumName: 'EEventType',
    enum: EEventType,
    isArray: false,
    required: true,
  })
  @IsDefined()
  type: EEventType;

  @ApiProperty({
    description: 'Payload do evento',
    required: true,
    isArray: false,
  })
  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  payload: any;
}
