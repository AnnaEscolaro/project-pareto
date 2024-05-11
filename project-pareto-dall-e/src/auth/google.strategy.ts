// google.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { AuthService } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: 'your-client-id',
      clientSecret: 'your-client-secret',
      callbackURL: 'your-callback-url',
      scope: ['email', 'profile'],
    });
  }

//   async validate(accessToken: string, refreshToken: string, profile: any) {
//     // const user = /* Lógica para verificar ou criar o usuário no seu banco de dados */;
//     // return user;
//   }
}
