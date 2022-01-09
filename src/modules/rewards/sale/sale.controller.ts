import { BadRequestException, Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleDto } from './sale.dto';
import { ApiTags } from '@nestjs/swagger';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';

@ApiTags('sales')
@Controller('sales')
export class SaleController {
    constructor(@InjectConnection() private readonly mongoConnection: Connection, private saleService: SaleService) {}

    @Post()
    async create(@Body() saleDto: SaleDto, @Res() res: any) {
        const session = await this.mongoConnection.startSession();
        session.startTransaction();
        try {
            const newSale: any = await this.saleService.create(saleDto, session);
            await session.commitTransaction();
            return res.status(HttpStatus.OK).send(newSale);
        } catch (error) {
            await session.abortTransaction();
            throw new BadRequestException(error);
        } finally {
            session.endSession();
        }
        //return this.saleService.create(SaleDto);
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
