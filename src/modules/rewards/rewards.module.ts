import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from 'src/schemas/category.schema';
import { Item, ItemSchema } from 'src/schemas/item.schema';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { ItemController } from './item/item.controller';
import { ItemService } from './item/item.service';
import { SaleController } from './sale/sale.controller';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { SaleService } from './sale/sale.service';
import { Sale, SaleSchema } from 'src/schemas/sale.schema';
import { Customer, CustomerSchema } from 'src/schemas/customer.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: Category.name, schema: CategorySchema },
        { name: Item.name, schema: ItemSchema},
        { name: Sale.name, schema: SaleSchema },
        { name: Customer.name, schema: CustomerSchema}
      ]
    )
  ],
  controllers: [CategoryController, ItemController, SaleController, CustomerController],
  providers: [CategoryService, ItemService, CustomerService, SaleService]
})
export class RewardsModule {}
