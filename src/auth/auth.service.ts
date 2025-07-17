import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    @InjectRepository(Users)
    private readonly usersRepo: Repository<Users>,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.usersRepo.findOne({ where: { email } });
    if (user && (await bcrypt.compare(pass, user.passwordHash))) {
      const { passwordHash, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async login(user: { id: number; email: string }) {
    const payload = { sub: user.id, email: user.email };
    return { access_token: this.jwt.sign(payload) };
  }

  async signup(name: string, email: string, password: string) {
    // const exists = await this.usersRepo.exist({ where: { email } });
    // if (exists) {
    //   throw new ConflictException('Email already registered');
    // }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = this.usersRepo.create({name, email, passwordHash });
    return await this.usersRepo.save(user);

    // const { passwordHash: _, ...safeUser } = saved;
    // return safeUser;
  }
}
