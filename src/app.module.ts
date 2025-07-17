
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
      host: `curd.cji8eg6wwcfd.ap-south-1.rds.amazonaws.com`,
      port: 5432,
      username: 'curd',
      password: '3j0xxsXqKHmxIl5dERCf',
      database: 'curd',
      entities: [Product,Users],
      autoLoadEntities: true,
      synchronize: true,         
    }),
    ProductModule,  
    AuthModule             
  ],
})
export class AppModule {}

