// modules/module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Product } from '../entities/entity';
import { ProductController } from '../controllers/controller';
import { ProductService } from '../services/service';
import { JwtStrategy } from '../middleware/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    PassportModule,
      JwtModule.register({
      secret: process.env.JWT_SECRET ?? 'supersecret',  
      signOptions: { expiresIn: '1h' },
    }),
  ],
   controllers: [ProductController],
   providers: [ProductService,JwtStrategy], 
   exports: [JwtModule],
})
export class ProductModule {}
