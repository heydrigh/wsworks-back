import { Module, forwardRef } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { ModelsModule } from 'src/models/models.module';
import { Model } from 'src/models/entities/model.entity';

@Module({
  imports: [
    forwardRef(() => ModelsModule),
    TypeOrmModule.forFeature([Brand, Model]),
  ],
  controllers: [BrandsController],
  providers: [BrandsService],
  exports: [BrandsService],
})
export class BrandsModule {}
