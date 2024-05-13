import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Images } from './images.entity';
import { OpenaiService } from 'src/openai/openai.service';

@Injectable()
export class ImagesService {
  constructor(
    @InjectModel(Images)
    private imageModel: typeof Images,
    private readonly openAiService: OpenaiService,
  ) {}

  async findAll(userId): Promise<Images[]> {
    try {
      return this.imageModel.findAll({
        where: { userId: userId },
      });
    } catch (ex) {
      console.error(ex);
    }
  }

  async generateImage(prompt: string): Promise<any> {
    const imageUrl = await this.openAiService.generateImage(prompt);
    await this.imageModel.create({
      prompt: prompt,
      link: imageUrl,
    });
    return imageUrl;
  }
}
