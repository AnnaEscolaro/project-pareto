import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import OpenAIApi from 'openai';

@Injectable()
export class OpenaiService {
//   constructor(private readonly openai: OpenAIApi) {
//     this.openai = new OpenAIApi({
//       apiKey: process.env.OPEN_AI_PRIVATE_KEY,
//     });
//   }
private readonly openai: OpenAIApi;

constructor() {
  this.openai = new OpenAIApi({
    apiKey: process.env.OPEN_AI_PRIVATE_KEY,
  });
}

  async generateImage(text: string): Promise<string> {
    try {
      const { data } = await this.openai.images.generate({
        model: 'dall-e-3',
        prompt: text,
        response_format: 'url',
      });
      return data[0].url;
    } catch (e) {
      console.error(e);
      throw new ServiceUnavailableException('Failed to generate image');
    }
  }
}
