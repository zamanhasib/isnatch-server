import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto } from './customer.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('customers')
@Controller('customers')
export class CustomerController {
    constructor(private customerService: CustomerService) {}

    @Post()
    create(@Body() customerDto: CustomerDto) {
        return this.customerService.create(customerDto);
    }

    @Get()
    async findAll() {
        return this.customerService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.customerService.findById(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() customerDto: CustomerDto) {
        return this.customerService.update(id, customerDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return `This action removes a #${id} category`;
    }
}
