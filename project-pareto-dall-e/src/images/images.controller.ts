import { Controller, Get, Post, Body } from '@nestjs/common';
import { ImagesService } from './images.service';
import { GenerateImageDto } from 'src/dto/generate.image.dto';
import { Request } from 'express';

@Controller('images')
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @Get()
  async getAll(): Promise<any> {
    const result = await this.imagesService.findAll();
    return result;
  }

  @Post('/generate-image')
  //   @UseGuards(AuthGuard('google'))
    async generateImage(@Body() generateImageDto: GenerateImageDto) {
      const { prompt } = generateImageDto;
      return this.imagesService.generateImage(prompt);
    }
}
