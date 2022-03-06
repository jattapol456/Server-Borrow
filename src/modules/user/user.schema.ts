import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
@Schema()
export class User {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
  
  @Prop()
  employee_id: string;

  @Prop()
  phone_number: string;
  
  @Prop()
  division: string;
  
  @Prop()
  department: string;
  
  @Prop()
  section: string;

  @Prop()
  profileimg: string;
}

export const UserSchema = SchemaFactory.createForClass(User);