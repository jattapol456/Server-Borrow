import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTtemDto, UpdateItemDto } from 'src/modules/item/item.dto';
import { Item, ItemDocument } from 'src/modules/item/item.schema';

@Injectable()
export class ItemService {
  constructor(@InjectModel(Item.name) private ItemModel: Model<ItemDocument>) {}
  async create(createItemDto: CreateTtemDto) {
      return this.ItemModel.create(createItemDto)
  }

  async findAll(){
      return this.ItemModel.find()
  }
  
  async findById(id:string){
      return this.ItemModel.findById(id)
  }

  async updateById(id:string,updateItemDto:UpdateItemDto){
    await this.ItemModel.updateOne({_id:id},{$set:updateItemDto})
    return this.ItemModel.findById(id)
  }

  async deleteById(id:string){
      await this.ItemModel.deleteOne({_id:id})
      return
  }
}
