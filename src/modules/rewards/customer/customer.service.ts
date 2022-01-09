import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClientSession, Model } from 'mongoose';
import { Customer, CustomerDocument } from 'src/schemas/customer.schema';
import { CustomerDto } from './customer.dto';

@Injectable()
export class CustomerService {
    constructor(@InjectModel(Customer.name) private customerModel: Model<CustomerDocument>) {}

    async create(customerDto: CustomerDto): Promise<Customer> {
        const createdCustomer = new this.customerModel(customerDto);
        return createdCustomer.save();
    }

    async findAll(): Promise<Customer[]> {
        return this.customerModel.find().exec();
    }

    async findById(id: string): Promise<Customer> {
        return this.customerModel.findById(id).exec();
    }

    async findCustomer(id: string, session: ClientSession): Promise<Customer> {
        return this.customerModel.findById(id).session(session).exec();
    }

    async update(id: string, customerDto: CustomerDto): Promise<Customer> {
        return this.customerModel.findByIdAndUpdate(id, customerDto, {
            new: true
          }).exec();
    }

    async updateBalance(id: string, customerDto: CustomerDto, session: ClientSession): Promise<Customer> {
        return this.customerModel.findByIdAndUpdate(id, customerDto, {
            new: true
          }).session(session).exec();
    }
}
