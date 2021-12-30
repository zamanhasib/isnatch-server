import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from 'src/schemas/category.schema';
import { CategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) {}

    async create(categoryDto: CategoryDto): Promise<Category> {
        const createdCategory = new this.categoryModel(categoryDto);
        return createdCategory.save();
    }

    async findAll(): Promise<Category[]> {
        return this.categoryModel.find().exec();
    }

    async findOne(code: string): Promise<Category> {
        return this.categoryModel.findOne({code}).populate('items').exec();
    }

    async findById(id: string): Promise<Category> {
        return this.categoryModel.findById(id).populate('items', '-categories').exec();
    }
}
