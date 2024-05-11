import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
// import { GenerateImageDto } from './dto/generate.image.dto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

//   @Post('/generate-image')
// //   @UseGuards(AuthGuard('google'))
//   async generateImage(@Body() generateImageDto: GenerateImageDto) {
//     const { prompt } = generateImageDto;
//     return this.appService.generateImage(prompt);
//   }

//   @Post('login')
//   async login(@Body() body: { googleToken: string }) {
//     // Lógica para autenticar com o token do Google e retornar um JWT
//   }

}
