import { ApiProperty } from '@nestjs/swagger';
import { Car, Fuel } from '../entities/car.entity';
import { Model } from 'src/models/entities/model.entity';

export class CarDto {
  @ApiProperty({ format: 'uuid' })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  year: number;

  @ApiProperty()
  fuel: Fuel;

  @ApiProperty()
  doorQuantity: number;

  @ApiProperty()
  color: string;

  @ApiProperty()
  model: Model;

  constructor(entity: Car) {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
    this.year = entity.year;
    this.fuel = entity.fuel;
    this.doorQuantity = entity.doorQuantity;
    this.color = entity.color;
    this.model = entity.model;
  }
}
