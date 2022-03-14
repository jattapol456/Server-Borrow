import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemModule } from './modules/item/item.module';
import { UserModule } from './modules/user/user.module';
import { BorrowModule } from './modules/borrow/borrow.module';
// import { NotiModule } from './modules/noti/noti.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/server-borrow'),
    ItemModule,
    UserModule,
    BorrowModule,
    // NotiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
