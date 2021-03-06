import { Module, HttpModule } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Blog, BlogSchema } from './schemas/blog.schema';


@Module({
  providers: [BlogService],
  controllers: [BlogController],
  imports: [
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
    HttpModule
  ],
})
export class BlogModule {

}
