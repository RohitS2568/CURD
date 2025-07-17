
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/entity';
import { ProductModule } from './modules/module';  
import { AuthModule } from './auth/auth.module';
import { Users } from './entities/user.entity';


@Module({
  imports: [
  
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      entities: [Product,Users],
      synchronize: true,         
    }),
    ProductModule,  
    AuthModule             
  ],
})
export class AppModule {}

