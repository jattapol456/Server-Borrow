import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BorrowController } from './borrow.controller';
import { BorrowSchema } from './borrow.schema';
import { BorrowService } from './borrow.service';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Borrow', schema: BorrowSchema }])],
    controllers: [BorrowController],
    providers: [BorrowService],
    exports: [BorrowService],
  })
  export class BorrowModule {}