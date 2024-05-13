import { Controller, Get, Post, Body, Request } from '@nestjs/common';
import { ImagesService } from './images.service';
import { GenerateImageDto } from 'src/dto/generate.image.dto';

@Controller('images')
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @Get()
  async getAll(@Request() req): Promise<any> {
    const userId = req.body.userId;
    console.log(userId);
    const result = await this.imagesService.findAll(userId);
    return result;
  }

  @Post('/generate-image')
  async generateImage(@Body() generateImageDto: GenerateImageDto) {
    const { prompt } = generateImageDto;
    return this.imagesService.generateImage(prompt);
  }
}
