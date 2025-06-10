import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class HttpContextDto {
  @IsIn(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
  @IsString()
  @IsNotEmpty()
  @ApiProperty( {enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], example: 'GET'})
  method!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty( {type: 'string', example: 'https://api.example.com/entitydefinition/123/role'}  )
  url!: string;

  @ApiProperty({
    type: 'object',
    additionalProperties: { type: 'string' },
    example: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer token123'
    }
  })
  @IsOptional()
  headers?: Record<string, any>;

  @ApiProperty({
    type: 'object',
    additionalProperties: { type: 'string' },
    example: {
      profileId: 'p123'
    }
  })
  @IsOptional()
  params?: Record<string, any>;

  @ApiProperty()
  @IsOptional()
  body?: any;
}
