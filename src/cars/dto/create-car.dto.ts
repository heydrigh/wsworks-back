import { ApiProperty } from '@nestjs/swagger';
import { Fuel } from '../entities/car.entity';
import { IsNotEmpty } from 'class-validator';

export class CreateCarDto {
  @IsNotEmpty()
  @ApiProperty()
  year: number;

  @IsNotEmpty()
  @ApiProperty()
  fuel: Fuel;

  @IsNotEmpty()
  @ApiProperty()
  doorQuantity: number;

  @IsNotEmpty()
  @ApiProperty()
  color: string;

  @IsNotEmpty()
  @ApiProperty()
  modelId: string;
}
