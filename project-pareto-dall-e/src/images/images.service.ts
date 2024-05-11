import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Images } from '../images/images.entity';
import { OpenaiService } from 'src/openai/openai.service';

@Injectable()
export class ImagesService {
  constructor(
    @InjectModel(Images) 
    private imageModel: typeof Images,
    private readonly openAiService: OpenaiService,      
    ) {}

  async findAll(): Promise<Images[]> {
    try {
      return this.imageModel.findAll();
    } catch (ex) {
      console.error(ex);
    }
  }
  
  async generateImage(prompt: string): Promise<any> {
    const generatedImage = await this.openAiService.generateImage(prompt);
    console.log(generatedImage);
    const record = await this.imageModel.create({
      prompt: prompt,
      link: generatedImage,
    });
    console.log(record);
    return generatedImage;
  }
}
