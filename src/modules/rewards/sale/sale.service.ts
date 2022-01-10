import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClientSession, Model } from 'mongoose';
import { Sale, SaleDocument } from 'src/schemas/sale.schema';
import { CustomerService } from '../customer/customer.service';
import { SaleDto } from './sale.dto';

@Injectable()
export class SaleService {
  constructor(
    @InjectModel(Sale.name) private saleModel: Model<SaleDocument>,
    private customerService: CustomerService,
  ) {}

  async create(saleDto: SaleDto, session: ClientSession) {
    const createdSale = await new this.saleModel(saleDto, session);
    const newSale = createdSale.save();
    const customer = await this.customerService.findCustomer(
      saleDto.customer,
      session,
    );
    const balance =
      customer.balance + saleDto.cashbackSnatched - saleDto.cashbackUsed;
    await this.customerService.updateBalance(
      saleDto.customer,
      { balance: balance > 0 ? balance : 0 },
      session,
    );
    return newSale;
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
