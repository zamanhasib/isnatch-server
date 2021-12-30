import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types} from 'mongoose';


export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  code: string;

  @Prop()
  name: string;

  @Prop()
  sequence: number;

  @Prop([{type: SchemaTypes.ObjectId, ref: 'Item'}])
  items: Types.ObjectId[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
