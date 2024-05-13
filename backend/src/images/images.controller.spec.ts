// import { Test, TestingModule } from '@nestjs/testing';
// import { ImagesController } from './images.controller';

// describe('ImagesController', () => {
//   let controller: ImagesController;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [ImagesController],
//     }).compile();

//     controller = module.get<ImagesController>(ImagesController);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });
// });

// import { Test, TestingModule } from '@nestjs/testing';
// import { ImagesController } from './images.controller';
// import { ImagesService } from './images.service';

// describe('ImagesController', () => {
//   let controller: ImagesController;
//   let service: ImagesService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [ImagesController],
//       providers: [ImagesService],
//     }).compile();

//     controller = module.get<ImagesController>(ImagesController);
//     service = module.get<ImagesService>(ImagesService);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });

//   describe('getAll', () => {
//     it('should return images for a given userId', async () => {
//       const userId = 1;
//       const images: any = [{ id: 1, prompt: 'Prompt 1', link: 'image1.jpg' }];

//       jest.spyOn(service, 'findAll').mockResolvedValue(images);

//       const result = await controller.getAll({ body: { userId } });

//       expect(result).toEqual(images);
//     });
//   });

//   describe('generateImage', () => {
//     it('should generate and return an image', async () => {
//       const prompt = 'Generate an image';
//       const imageUrl = 'http://example.com/image.jpg';

//       jest.spyOn(service, 'generateImage').mockResolvedValue(imageUrl);

//       const result = await controller.generateImage({ prompt });

//       expect(result).toEqual(imageUrl);
//     });
//   });
// });

import { Test, TestingModule } from '@nestjs/testing';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';

describe('ImagesController', () => {
  let controller: ImagesController;
  let service: ImagesService;

  beforeEach(async () => {
    const imagesServiceMock = {
      findAll: jest.fn(),
      generateImage: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagesController],
      providers: [{ provide: ImagesService, useValue: imagesServiceMock }],
    }).compile();

    controller = module.get<ImagesController>(ImagesController);
    service = module.get<ImagesService>(ImagesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAll', () => {
    it('should return images for a given userId', async () => {
      const userId = 1;
      const images: any = [{ id: 1, prompt: 'Prompt 1', link: 'image1.jpg' }];

      service.findAll.mockResolvedValue(images);

      const result = await controller.getAll({ body: { userId } });

      expect(result).toEqual(images);
    });
  });

  describe('generateImage', () => {
    it('should generate and return an image', async () => {
      const prompt = 'Generate an image';
      const imageUrl = 'http://example.com/image.jpg';

      service.generateImage.mockResolvedValue(imageUrl);

      const result = await controller.generateImage({ prompt });

      expect(result).toEqual(imageUrl);
    });
  });
});
