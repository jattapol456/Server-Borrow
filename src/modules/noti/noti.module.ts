import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BorrowModule } from '../borrow/borrow.module';
import { NotiController } from './noti.controller';
import { NotiSchema } from './noti.schema';
import { NotiService } from './noti.service';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Noti', schema: NotiSchema }]),BorrowModule],
    controllers: [NotiController],
    providers: [NotiService],
    exports: [NotiService],
  })
  export class NotiModule {}