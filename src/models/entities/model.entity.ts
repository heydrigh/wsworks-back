import { ApiProperty } from '@nestjs/swagger';
import { Brand } from 'src/brands/entities/brand.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
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

  constructor(partial: Partial<Model>) {
    Object.assign(this, partial);
  }
}
