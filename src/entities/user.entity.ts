import { Entity, PrimaryGeneratedColumn, Column, BaseEntity,Unique } from 'typeorm';

@Entity()
@Unique(['email'])
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
  
  @Column({ name: 'password_hash' })
  passwordHash: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;
}