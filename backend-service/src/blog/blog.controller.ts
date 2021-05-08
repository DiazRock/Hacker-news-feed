import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
import { CreateblogDto } from './dto/create-blog.dto'
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
    constructor(private readonly service: BlogService) {}

    @Get()
    async index () {
        return await this.service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() createBlogDto: CreateblogDto) {
        return await this.service.create(createBlogDto);
    }

    @Delete(':id')
    async delete(@Param('id') id : string) {
        return await this.service.delete(id);
    }


}
