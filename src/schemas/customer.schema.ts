import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
  @Prop()
  name: string;

  @Prop()
  balance: number;

}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
