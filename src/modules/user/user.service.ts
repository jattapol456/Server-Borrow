import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from 'src/modules/user/user.dto';
import { User, UserDocument } from 'src/modules/user/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}
  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10)
    return this.UserModel.create(createUserDto)
  }

  async findAll(){
      return this.UserModel.find()
  }
  
  async findById(id:string){
      return this.UserModel.findById(id)
  }

  async findByEmail(email:string){
      return this.UserModel.findOne({email})
  }

  async updateById(id:string,updateUserDto:UpdateUserDto){
    await this.UserModel.updateOne({_id:id},{$set:updateUserDto})
    return this.UserModel.findById(id)
  }

  async deleteById(id:string){
      await this.UserModel.deleteOne({_id:id})
      return
  }
}

