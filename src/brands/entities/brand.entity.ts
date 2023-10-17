import { ApiProperty } from '@nestjs/swagger';
import { Model } from 'src/models/entities/model.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Brand {
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

  @OneToMany(() => Model, (model) => model.brand)
  models: Model[];

  constructor(partial: Partial<Brand>) {
    Object.assign(this, partial);
  }
}
