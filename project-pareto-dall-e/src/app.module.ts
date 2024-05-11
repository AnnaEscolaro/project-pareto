import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import databaseProviders from './config/connection';
import { SequelizeModule } from '@nestjs/sequelize';
import { Images } from './images/images.entity';
import { ImagesModule } from './images/images.module';
import { OpenaiModule } from './openai/openai.module';
import { OpenaiService } from './openai/openai.service';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }), 
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '35.247.238.219',
      port: 3306,
      username: 'root',
      password: 'cEP=O2xbda=p:_~1',
      database: 'pareto',
      autoLoadModels: true,
      synchronize: true,
    }), 
    ImagesModule, 
    OpenaiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
