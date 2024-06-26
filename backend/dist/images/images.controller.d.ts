import { ImagesService } from './images.service';
import { GenerateImageDto } from 'src/dto/generate.image.dto';
export declare class ImagesController {
    private imagesService;
    constructor(imagesService: ImagesService);
    getAll(req: any): Promise<any>;
    generateImage(generateImageDto: GenerateImageDto): Promise<any>;
}
