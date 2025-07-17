import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './modules/module';
import { Product } from './entities/entity';

@Module({
    imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'curd',
      entities: [Product],
      synchronize: true,
    }),
    ProductModule,
  ],
})
export class ProductRepository {}