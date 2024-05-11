import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
// import { Images } from './images/images.entity';
import { OpenaiService } from './openai/openai.service';

@Injectable()
export class AppService {  
  getHello(): string {
    return 'Hello World!';
  }
}
