import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as _Schema } from 'mongoose';

export type NotiDocument = Noti & Document;

@Schema({ timestamps: true })
@Schema()
export class Noti {
  @Prop({ref: "User", type: _Schema.Types.ObjectId})
  user_id: _Schema.Types.ObjectId;

  @Prop({ref: "Borrow", type: _Schema.Types.ObjectId})
  borrow_id: _Schema.Types.ObjectId;

}
export const NotiSchema = SchemaFactory.createForClass(Noti);