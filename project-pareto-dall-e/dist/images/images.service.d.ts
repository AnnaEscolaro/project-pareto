import { Images } from '../images/images.entity';
import { OpenaiService } from 'src/openai/openai.service';
export declare class ImagesService {
    private imageModel;
    private readonly openAiService;
    constructor(imageModel: typeof Images, openAiService: OpenaiService);
    findAll(): Promise<Images[]>;
    generateImage(prompt: string): Promise<any>;
}
