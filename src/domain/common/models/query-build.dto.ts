import { ApiProperty } from '@nestjs/swagger';
import { FilterOperator } from '../enumerators/filter-operator.enum';

import { IsNotEmpty, IsString } from 'class-validator';

export class queryBuildDto {
  @ApiProperty({ description: 'Nome da tabela alvo' })
  @IsString()
  @IsNotEmpty()
  table!: string;
  @ApiProperty({ description: 'Nome do campo que será filtrado' })
  @IsString()
  @IsNotEmpty()
  field!: string;
  @ApiProperty({ enum: FilterOperator, description: 'Operador lógico do filtro' })
  @IsString()
  @IsNotEmpty()
  operator!: FilterOperator;
  @ApiProperty({ description: 'Valor a ser comparado' })
  @IsString()
  value: any;
}