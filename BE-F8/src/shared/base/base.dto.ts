import { ApiPropertyOptional } from '@nestjs/swagger';

export interface FilterDto {
  propertyName: string;
  value: any;
  comparision: number;
  filterType?: number;
}

export class BaseFilterDto {
  @ApiPropertyOptional()
  filterItems?: FilterDto[];
  @ApiPropertyOptional()
  skipCount?: number;
  @ApiPropertyOptional()
  maxResultCount?: number;
  @ApiPropertyOptional()
  searchText?: string;
  @ApiPropertyOptional()
  sort: string;
  @ApiPropertyOptional()
  sortDirection: number;
}

export class BaseResponseDto<T> {
  data: T;
  message: string;
  status: number;
  success: boolean;
}
