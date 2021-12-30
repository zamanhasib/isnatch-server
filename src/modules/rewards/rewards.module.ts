import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from 'src/schemas/category.schema';
import { Item, ItemSchema } from 'src/schemas/item.schema';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { ItemController } from './item/item.controller';
import { ItemService } from './item/item.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: Category.name, schema: CategorySchema },
        { name: Item.name, schema: ItemSchema}
      ]
    )
  ],
  controllers: [CategoryController, ItemController],
  providers: [CategoryService, ItemService]
})
export class RewardsModule {}
