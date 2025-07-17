import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
 @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  product_size: number;

  @ApiProperty()
  qty: number;

  @ApiProperty({ default: true })
  isActive: boolean;
}