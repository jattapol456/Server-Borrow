import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as _Schema } from 'mongoose';

export type BorrowDocument = Borrow & Document;

@Schema({ timestamps: true })
@Schema()
export class Borrow {
  @Prop({ref: "User", type: _Schema.Types.ObjectId})
  user_id: _Schema.Types.ObjectId;

  @Prop({ref: "Item", type: _Schema.Types.ObjectId})
  item_id: _Schema.Types.ObjectId;

  @Prop()
  reason: string;

  @Prop()
  dateborrow: string;
  
  @Prop()
  timeborrow: string;

  @Prop()
  datereturn: string;

  @Prop()
  timereturn: string;
  
  @Prop()
  status: string;
  
  @Prop()
  problem: string;
  
  @Prop()
  timereturnrequest: string;
}
export const BorrowSchema = SchemaFactory.createForClass(Borrow);