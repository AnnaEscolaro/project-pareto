import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateJwtToken(user: any): Promise<string> {
    const payload = { /* Dados que você deseja incluir no token */ };
    return this.jwtService.sign(payload);
  }
}
