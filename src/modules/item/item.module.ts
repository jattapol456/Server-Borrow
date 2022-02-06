import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemController } from './item.controller';
import { ItemSchema } from './item.schema';
import { ItemService } from './item.service';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
    controllers: [ItemController],
    providers: [ItemService],
  })
  export class ItemModule {}