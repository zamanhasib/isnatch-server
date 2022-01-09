import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop()
  name: string;

  @Prop()
  cashback: number;

  @Prop([{type: SchemaTypes.ObjectId, ref: 'Category'}])
  categories: Types.ObjectId[];

  @Prop()
  instructions: Array<string>;

  @Prop()
  redeemAt: string;

  @Prop()
  redeemBy: string;

  @Prop()
  subItems: Array<any>;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
