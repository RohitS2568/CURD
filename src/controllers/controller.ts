import { Controller, Get, Post, Put, Delete, Body, Param , UseGuards } from '@nestjs/common';
import { ProductService } from '../services/service';
import { CreateProductDto } from '../dtos/dto';
import { Product } from '../entities/entity';
import { JwtAuthGuard } from 'src/middleware/auth';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('product')
@ApiTags('product')
@UseGuards(JwtAuthGuard) 
export class ProductController {
constructor(private readonly productService: ProductService) {}

  @Post('create')
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return await this.productService.createProduct(createProductDto);
  }

  @Get('getAllProduct')
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Returns all users.' })
  async Product(): Promise<Product[]> {
    return await this.productService.findAllProduct();
  }

  // @Get(':id')
  // async getProductById(@Param('id') id: number): Promise<Product> {
  //   return await this.productService.getProductById(id);
  // }

@Put('update')
async updateProduct(
  @Body('id') id: number,
  @Body() body: Partial<Product>,
): Promise<Product> {
  delete body.id;
  return this.productService.updateProduct(id, body);
}

//   @Delete(':id')
//   async deleteProduct(@Param('id') id: number): Promise<void> {
//     return await this.productService.deleteProduct(id);
//   }
}