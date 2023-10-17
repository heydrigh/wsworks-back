import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'src/models/entities/model.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
    @InjectRepository(Model)
    private readonly modelRepository: Repository<Model>,
  ) {}

  async create(createCarDto: CreateCarDto) {
    const { modelId, ...carData } = createCarDto;

    const model = await this.modelRepository.findOneByOrFail({ id: modelId });

    if (!model) {
      throw new NotFoundException(`Brand with ID ${modelId} not found`);
    }

    const newModel = this.carRepository.create({
      ...carData,
      model,
    });

    const car = await this.carRepository.save(newModel);

    return car;
  }

  findAll() {
    return this.carRepository.find({
      relations: {
        model: true,
      },
    });
  }

  async findOne(id: string) {
    const car = await this.carRepository.findOneByOrFail({ id });

    if (!car) {
      throw new NotFoundException(`Car with ID #${id} not found`);
    }

    return car;
  }

  async update(id: string, updateCarDto: UpdateCarDto) {
    const existingCar = await this.findOne(id);

    this.carRepository.merge(existingCar, updateCarDto);

    const updatedCar = await this.carRepository.save(existingCar);

    return updatedCar;
  }

  async remove(id: string) {
    const existingCar = await this.findOne(id);
    await this.carRepository.remove(existingCar);
  }
}
