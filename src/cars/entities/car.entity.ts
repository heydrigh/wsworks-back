import { ApiProperty } from '@nestjs/swagger';
import { Model } from 'src/models/entities/model.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Fuel {
  GASOLINA = 'gasolina',
  DIESEL = 'diesel',
  FLEX = 'flex',
  ELETRICO = 'eletrico',
}

@Entity()
export class Car {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ format: 'uuid' })
  id: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt!: Date;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt!: Date;

  @Column({ type: 'integer' })
  @ApiProperty()
  year: number;

  @Column({
    type: 'enum',
    enum: Fuel,
  })
  @ApiProperty()
  fuel: Fuel;

  @Column({ type: 'integer' })
  @ApiProperty()
  doorQuantity: number;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  color: string;

  @ManyToOne(() => Model, (model) => model.car, { eager: true })
  @JoinTable()
  model: Model;

  constructor(partial: Partial<Car>) {
    Object.assign(this, partial);
  }
}
