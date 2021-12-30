import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryDto } from './category.dto';
import { Category } from './category.interface';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Post()
    create(@Body() categoryDto: CategoryDto) {
        return this.categoryService.create(categoryDto);
    }

    @Get()
    async findAll() {
        return this.categoryService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.categoryService.findById(id);
    }
   
    @Put(':id')
    async update(@Param('id') id: string, @Body() categoryDto: CategoryDto) {
        return `This action updates a #${id} category`;
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return `This action removes a #${id} category`;
    }
}
