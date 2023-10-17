import { ApiProperty } from '@nestjs/swagger';
import { Brand } from '../entities/brand.entity';

export class BrandDto {
  @ApiProperty({ format: 'uuid' })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  name: string;

  constructor(entity: Brand) {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
    this.name = entity.name;
  }
}
