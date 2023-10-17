import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @ApiProperty()
  name: string;
}
