import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema({ timestamps: true })
@Schema()
export class Item {
  @Prop()
  model: string;

  @Prop()
  name: string;

  @Prop()
  brand: string;

  @Prop()
  code_ip: string;
  
  @Prop()
  img: string;

  @Prop()
  statusitem: string;

  @Prop()
  problem: string[];
}

export const ItemSchema = SchemaFactory.createForClass(Item);