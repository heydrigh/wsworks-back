import { ApiProperty } from '@nestjs/swagger';
import { Model } from '../entities/model.entity';
import { Brand } from 'src/brands/entities/brand.entity';

export class ModelDto {
  @ApiProperty({ format: 'uuid' })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  fipePrice: number;

  @ApiProperty()
  brand: Brand;

  constructor(entity: Model) {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
    this.name = entity.name;
    this.fipePrice = entity.fipePrice;
    this.brand = entity.brand;
  }
}
