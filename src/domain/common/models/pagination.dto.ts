import { ApiProperty } from '@nestjs/swagger';

export class paginationDto {
  @ApiProperty()
  totalItems!: number;
  @ApiProperty()
  totalPages!: number;
  @ApiProperty()
  currentPage!: number;
  @ApiProperty()
  pageSize!: number;

  constructor(init?: Partial<paginationDto>) {
    Object.assign(this, init);
  }
}