import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}

  async create(createBrandDto: CreateBrandDto) {
    const newBrand = new Brand(createBrandDto);

    const brand = await this.brandRepository.save(newBrand);

    return brand;
  }

  findAll() {
    return this.brandRepository.find();
  }

  async findOne(id: string) {
    const brand = await this.brandRepository.findOneByOrFail({ id });

    if (!brand) {
      throw new NotFoundException(`Model with ID #${id} not found`);
    }

    return brand;
  }

  async update(id: string, updateBrandDto: UpdateBrandDto) {
    const existingBrand = await this.findOne(id);

    this.brandRepository.merge(existingBrand, updateBrandDto);

    const updatedModel = await this.brandRepository.save(existingBrand);

    return updatedModel;
  }

  async remove(id: string) {
    const existingBrand = await this.findOne(id);
    await this.brandRepository.remove(existingBrand);
  }
}
