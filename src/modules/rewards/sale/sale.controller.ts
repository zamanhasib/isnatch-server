import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleDto } from './sale.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('sales')
@Controller('sales')
export class SaleController {
    constructor(private saleService: SaleService) {}

    @Post()
    create(@Body() SaleDto: SaleDto) {
        return this.saleService.create(SaleDto);
    }

    @Get()
    async findAll() {
        return this.saleService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.saleService.findById(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() SaleDto: SaleDto) {
        return this.saleService.update(id, SaleDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return `This action removes a #${id} category`;
    }
}
