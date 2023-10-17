import { ApiProperty } from '@nestjs/swagger';
import { Brand } from 'src/brands/entities/brand.entity';
import { Car } from 'src/cars/entities/car.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Model {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ format: 'uuid' })
  id: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt!: Date;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt!: Date;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  name: string;

  @Column({ type: 'float' })
  @ApiProperty()
  fipePrice: number;

  @ManyToOne(() => Brand, (brand) => brand.models, { eager: true })
  @JoinTable()
  brand: Brand;

  @OneToMany(() => Car, (car) => car.model)
  @JoinTable()
  car: Car[];

  constructor(partial: Partial<Model>) {
    Object.assign(this, partial);
  }
}
