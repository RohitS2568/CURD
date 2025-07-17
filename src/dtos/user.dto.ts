// src/auth/dtos/signup-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class SignupResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

   @ApiProperty()
  accessToken: string;
}
