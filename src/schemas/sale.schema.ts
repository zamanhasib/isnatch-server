import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type SaleDocument = Sale & Document;

@Schema()
export class Sale {
  @Prop({type: SchemaTypes.ObjectId, ref: 'Customer'})
  customer: Types.ObjectId;

  @Prop({type: SchemaTypes.ObjectId, ref: 'Item'})
  item: Types.ObjectId;

  @Prop()
  totalPrice: number;

  @Prop()
  cashbackUsed: number;

  @Prop()
  cashbackSnatched: number;

  @Prop()
  amountPaid: number;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);
