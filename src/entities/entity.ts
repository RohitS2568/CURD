import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  product_size: number;
  
  @Column()
  qty: number;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;
}