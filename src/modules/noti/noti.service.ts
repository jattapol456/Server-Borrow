import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose } from 'mongoose';
import { CreateNotiDto } from 'src/modules/noti/noti.dto';
import { Noti, NotiDocument } from 'src/modules/noti/noti.schema';
import { Schema, mongo } from 'mongoose';
import { BorrowService } from '../borrow/borrow.service';
import { BorrowDocument, Borrow } from '../borrow/borrow.schema';

@Injectable()
export class NotiService {
  constructor(
    @InjectModel(Noti.name) private NotiModel: Model<NotiDocument>,
    @Inject(BorrowService) private borrowservice: BorrowService,
    // @InjectModel(Borrow.name) private BorrowModel: Model<BorrowDocument>,
    
  ) {}
  async create(createNotiDto: CreateNotiDto) {
    return this.NotiModel.create({ ...createNotiDto, status: 'wait', update: new Date(), shownoti: true });
  }
  async findAll(uid: string){ 
    const deleteNoti = await this.NotiModel.find({user_id: uid}).lean()

    const noti = await this.borrowservice.model().find({
      // _id: {
      //   $nin: deleteNoti.map(e => e._id)
      // }
     })

    return []
  }

}
