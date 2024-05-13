// import { Test, TestingModule } from '@nestjs/testing';
// import { ImagesService } from './images.service';

// describe('ImagesService', () => {
//   let service: ImagesService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [ImagesService],
//     }).compile();

//     service = module.get<ImagesService>(ImagesService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });
// });

// import { Test, TestingModule } from '@nestjs/testing';
// import { ImagesService } from './images.service';
// import { OpenaiService } from 'src/openai/openai.service';
// import { getModelToken } from '@nestjs/sequelize';
// import { Images } from '../images/images.entity';

// describe('ImagesService', () => {
//   let service: ImagesService;
//   let openAiService: OpenaiService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         ImagesService,
//         OpenaiService,
//         {
//           provide: getModelToken(Images),
//           useValue: {
//             findAll: jest.fn(),
//             create: jest.fn(),
//           },
//         },
//       ],
//     }).compile();

//     service = module.get<ImagesService>(ImagesService);
//     openAiService = module.get<OpenaiService>(OpenaiService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });

//   describe('findAll', () => {
//     it('should return images for a given userId', async () => {
//       const userId = 1;
//       const images = [{ id: 1, prompt: 'Prompt 1', link: 'image1.jpg' }];

//       jest
//         .spyOn(service['imageModel'], 'findAll')
//         .mockResolvedValue(images as any);

//       const result = await service.findAll(userId);

//       expect(result).toEqual(images);
//     });

//     it('should handle errors gracefully', async () => {
//       const userId = 1;
//       jest
//         .spyOn(service['imageModel'], 'findAll')
//         .mockRejectedValue(new Error('Database error'));

//       const result = await service.findAll(userId);

//       expect(result).toEqual([]);
//     });
//   });

//   describe('generateImage', () => {
//     it('should generate and save image', async () => {
//       const prompt = 'Generate an image';
//       const imageUrl = 'http://example.com/image.jpg';

//       jest.spyOn(openAiService, 'generateImage').mockResolvedValue(imageUrl);
//       jest.spyOn(service['imageModel'], 'create').mockResolvedValue({} as any);

//       const result = await service.generateImage(prompt);

//       expect(result).toEqual(imageUrl);
//       expect(service['imageModel'].create).toHaveBeenCalledWith({
//         prompt,
//         link: imageUrl,
//       });
//     });
//   });
// });

import { Test, TestingModule } from '@nestjs/testing';
import { ImagesService } from './images.service';
import { OpenaiService } from 'src/openai/openai.service';
import { getModelToken } from '@nestjs/sequelize';
import { Images } from '../images/images.entity';

describe('ImagesService', () => {
  let service: ImagesService;
  let openAiService: OpenaiService;
  let imageModelMock: any;

  beforeEach(async () => {
    // Create a mock for the image model
    imageModelMock = {
      findAll: jest.fn(),
      create: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ImagesService,
        {
          provide: OpenaiService,
          useValue: {
            generateImage: jest.fn(),
          },
        },
        {
          provide: getModelToken(Images),
          useValue: imageModelMock,
        },
      ],
    }).compile();

    service = module.get<ImagesService>(ImagesService);
    openAiService = module.get<OpenaiService>(OpenaiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return images for a given userId', async () => {
      const userId = 1;
      const images = [{ id: 1, prompt: 'Prompt 1', link: 'image1.jpg' }];

      imageModelMock.findAll.mockResolvedValue(images);

      const result = await service.findAll(userId);

      expect(result).toEqual(images);
    });

    it('should handle errors gracefully', async () => {
      const userId = 1;
      imageModelMock.findAll.mockRejectedValue(new Error('Database error'));

      const result = await service.findAll(userId);

      expect(result).toEqual([]);
    });
  });

  describe('generateImage', () => {
    it('should generate and save image', async () => {
      const prompt = 'Generate an image';
      const imageUrl = 'http://example.com/image.jpg';

      openAiService.generateImage.mockResolvedValue(imageUrl);
      imageModelMock.create.mockResolvedValue({} as any);

      const result = await service.generateImage(prompt);

      expect(result).toEqual(imageUrl);
      expect(imageModelMock.create).toHaveBeenCalledWith({
        prompt,
        link: imageUrl,
      });
    });
  });
});
