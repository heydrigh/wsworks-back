import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { ModelsModule } from './models/models.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configurationService } from './config/config.service';
import { BrandsModule } from './brands/brands.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(configurationService.getTypeOrmConfig(__dirname)),
    ModelsModule,
    BrandsModule,
    CarsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
