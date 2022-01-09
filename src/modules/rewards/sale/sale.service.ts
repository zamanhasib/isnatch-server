import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sale, SaleDocument } from 'src/schemas/sale.schema';
import { SaleDto } from './sale.dto';

@Injectable()
export class SaleService {
  constructor(@InjectModel(Sale.name) private saleModel: Model<SaleDocument>) {}

  async create(saleDto: SaleDto): Promise<Sale> {
    const createdSale = new this.saleModel(saleDto);
    return createdSale.save();
  }

  async findAll(): Promise<Sale[]> {
    return this.saleModel.find().exec();
  }

  async findById(id: string): Promise<Sale> {
    return this.saleModel.findById(id).exec();
  }

  async update(id: string, saleDto: SaleDto): Promise<Sale> {
    return this.saleModel.findByIdAndUpdate(id, saleDto).exec();
  }
}
