import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCarDto } from './create-car.dto';
import { Fuel } from '../entities/car.entity';

export class UpdateCarDto extends PartialType(CreateCarDto) {
  @ApiProperty()
  year: number;

  @ApiProperty()
  fuel: Fuel;

  @ApiProperty()
  doorQuantity: number;

  @ApiProperty()
  color: string;

  @ApiProperty()
  modelId: string;
}
