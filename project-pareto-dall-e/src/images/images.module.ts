import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Images } from './images.entity';

@Module({
  imports: [SequelizeModule.forFeature([Images])],
  controllers: [ImagesController],
  providers: [ImagesService]
})
export class ImagesModule {}
