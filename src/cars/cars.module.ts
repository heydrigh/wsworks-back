import { Module, forwardRef } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { Car } from './entities/car.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelsModule } from 'src/models/models.module';
import { Model } from 'src/models/entities/model.entity';

@Module({
  imports: [
    forwardRef(() => ModelsModule),
    TypeOrmModule.forFeature([Car, Model]),
  ],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
