import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose } from 'mongoose';
import { CreateBorrowDto, UpdateBorrowDto } from 'src/modules/borrow/borrow.dto';
import { Borrow, BorrowDocument } from 'src/modules/borrow/borrow.schema';
import { Schema, mongo } from 'mongoose';

@Injectable()
export class BorrowService {
  constructor(
    @InjectModel(Borrow.name) private BorrowModel: Model<BorrowDocument>,
  ) {}
  async create(createBorrowDto: CreateBorrowDto) {
    return this.BorrowModel.create({ ...createBorrowDto, status: 'wait' });
  }
  async update(id: string, createBorrowDto: UpdateBorrowDto) {
    return this.BorrowModel.updateOne({ _id: id }, { $set: createBorrowDto });
  }

  async findAll() {
    return this.BorrowModel.aggregate([
      {
        $lookup: {
          from: 'items',
          localField: 'item_id',
          foreignField: '_id',
          as: 'item',
        },
      },
      {
        $unwind: {
          path: '$item',
        },
      },
    ]);
  }

  async findById(id: string) {
    return this.BorrowModel.findById(id);
  }

  async findByUserId(id: string) {
    return this.BorrowModel.find({user_id: new mongo.ObjectId(id)}).populate("item_id")
  }
  
  async adminfindItem() {
    return this.BorrowModel.find({status: 'wait'}).populate("item_id").populate("user_id")
  }
  
  async adminfindItemreturn() {
    return this.BorrowModel.find({status: 'waitreturn'}).populate("item_id").populate("user_id")
  }

  async deleteById(id:string){
    await this.BorrowModel.deleteOne({_id:id})
    return
  }
  async borrowByItemId(id:string){
    return await this.BorrowModel.find({item_id:id}).populate("item_id").populate("user_id")
    
  }

}
