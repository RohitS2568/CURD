// repositories/product.repository.ts
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Product } from '../entities/entity';

@Injectable()
export class ProductRepository extends Repository<Product> {
  constructor(private readonly dataSource: DataSource) {
    /* Pass the entity and an EntityManager to the parent */
    super(Product, dataSource.createEntityManager());
  }

  // Now you can add custom methods:
  async findWithPriceGreaterThan(price: number) {
    return this.createQueryBuilder('product')
      .where('product.price > :price', { price })
      .getMany();
  }
}
