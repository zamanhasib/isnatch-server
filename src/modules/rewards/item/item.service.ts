import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from 'src/schemas/item.schema';
import { ItemDto } from './item.dto';

@Injectable()
export class ItemService {
    constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

    async create(itemDto: ItemDto): Promise<Item> {
        const createdItem = new this.itemModel(itemDto);
        return createdItem.save();
    }

    async findAll(): Promise<Item[]> {
        return this.itemModel.find().exec();
    }

    async findById(id: string): Promise<Item> {
        return this.itemModel.findById(id).populate('categories','-items -_id').exec();
    }
}
