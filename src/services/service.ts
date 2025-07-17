import { Injectable, NotFoundException } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/entity';
import { CreateProductDto } from '../dtos/dto'

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto);
    return await this.productRepository.save(product);
  }

  async findAllProduct(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  // async getProductById(id: number): Promise<Product> {
  //   return await this.productRepository.findOne(id);
  // }

async updateProduct(id: number, changes: Partial<Product>): Promise<Product> {
  await this.productRepository.update({ id }, changes);   // pass an object, not just the number
  const updated = await this.productRepository.findOneBy({ id });
  if (!updated) throw new NotFoundException(`Product ${id} not found`);
  return updated;
}



  // async deleteProduct(id: number): Promise<void> {
  //   await this.productRepository.delete(id);
  // }
}