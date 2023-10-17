import { PartialType } from '@nestjs/mapped-types';
import { CreateModelDto } from './create-model.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateModelDto extends PartialType(CreateModelDto) {
  @ApiProperty()
  name: string;

  @ApiProperty()
  fipePrice: number;

  @ApiProperty()
  brandId: string;
}
