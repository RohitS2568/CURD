import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import {SignupResponseDto} from '../dtos/user.dto'
import { Users } from 'src/entities/user.entity';
import { SignupDto } from 'src/dtos/signup.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

 
@Controller('auth')
@ApiTags('auth')
export class AuthController {
constructor(private readonly auth: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({ status: 200, description: 'User login' })
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.auth.validateUser(body.email, body.password);
    return this.auth.login(user);
  }

// @Post('signup')
// async signup(@Body() body: AuthCredentialsDto): Promise<User> {
//   return await this.auth.signup(body.email, body.password);
// }


@Post('signup')
async signup(
  @Body() body: SignupDto,
): Promise<Users> {
  return await this.auth.signup(body.name, body.email, body.password);

}


}
