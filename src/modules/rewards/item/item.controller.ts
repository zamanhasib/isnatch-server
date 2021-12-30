import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { ItemService } from './item.service';
import { ItemDto } from './item.dto';
import { Item } from 'src/schemas/item.schema';


@Controller('items')
export class ItemController {
    constructor(private itemService: ItemService) {}

    @Post()
    create(@Body() ItemDto: ItemDto) {
        return this.itemService.create(ItemDto);
    }

    @Get()
    async findAll() {
        return this.itemService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.itemService.findById(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() ItemDto: ItemDto) {
        return `This action updates a #${id} category`;
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return `This action removes a #${id} category`;
    }
}
