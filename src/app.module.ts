
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
      host: 'database-1.cji8eg6wwcfd.ap-south-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'BKiUkYUOJqNEab3MxRRx',
      database: 'database-1',
      entities: [Product,Users],
      synchronize: true,         
    }),
    ProductModule,  
    AuthModule             
  ],
})
export class AppModule {}

