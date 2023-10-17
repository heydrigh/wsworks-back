import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from './entities/model.entity';
import { Repository } from 'typeorm';
import { Brand } from 'src/brands/entities/brand.entity';

@Injectable()
export class ModelsService {
  constructor(
    @InjectRepository(Model)
    private readonly modelRepository: Repository<Model>,
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}

  async create(createModelDto: CreateModelDto) {
    const { brandId, ...modelData } = createModelDto;

    const brand = await this.brandRepository.findOneByOrFail({ id: brandId });

    if (!brand) {
      throw new NotFoundException(`Brand with ID ${brandId} not found`);
    }

    const newModel = this.modelRepository.create({
      ...modelData,
      brand,
    });

    const model = await this.modelRepository.save(newModel);

    return model;
  }

  findAll() {
    return this.modelRepository.find({
      relations: {
        brand: true,
      },
    });
  }

  async findOne(id: string) {
    const model = await this.modelRepository.findOneByOrFail({ id });

    if (!model) {
      throw new NotFoundException(`Model with ID #${id} not found`);
    }

    return model;
  }

  async update(id: string, updateModelDto: UpdateModelDto) {
    const existingModel = await this.findOne(id);

    this.modelRepository.merge(existingModel, updateModelDto);

    const updatedModel = await this.modelRepository.save(existingModel);

    return updatedModel;
  }

  async remove(id: string) {
    const existingModel = await this.findOne(id);
    await this.modelRepository.remove(existingModel);
  }
}
