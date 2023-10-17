import { Module, forwardRef } from '@nestjs/common';
import { ModelsService } from './models.service';
import { ModelsController } from './models.controller';
import { Model } from './entities/model.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from 'src/brands/entities/brand.entity';
import { BrandsService } from 'src/brands/brands.service';
import { BrandsModule } from 'src/brands/brands.module';

@Module({
  imports: [
    forwardRef(() => BrandsModule),
    TypeOrmModule.forFeature([Model, Brand]),
  ],
  controllers: [ModelsController],
  providers: [ModelsService, BrandsService],
  exports: [ModelsService],
})
export class ModelsModule {}
