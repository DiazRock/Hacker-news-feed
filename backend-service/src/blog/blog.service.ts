import { Injectable, HttpService } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog, BlogDocument } from './schemas/blog.schema';
import { CreateblogDto } from './dto/create-blog.dto';
import { Cron } from '@nestjs/schedule';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class BlogService {
    constructor(@InjectModel(Blog.name) private readonly model: Model<BlogDocument>,
                private httpService: HttpService) {
    }

    async findAll(): Promise<Blog[]> {
        return await this.model.find().sort({createdAt: 'desc'}).exec();
      }
    
    async findOne(id: string): Promise<Blog> {
    return await this.model.findById(id).exec();
    }

    async create(createBlogDto: CreateblogDto) {
        
        return new this.model({
          ...createBlogDto
        }).save( (err, data) => {
          if (data) {
            console.log('It works')
            return data
          }
          else {
            console.log('Something went wrong')
            console.log(err)
            return null
          }
        } );
      }
    
    async delete(id: string): Promise<Blog> {
    return await this.model.findByIdAndDelete(id).exec();
    }

    @Cron('0 0 * * * *')
    async requestHackerNews() {
      await this.httpService.get('http://hn.algolia.com/api/v1/search_by_date?query=nodejs').toPromise().then (
        (response) => {
          response.data.hits.forEach(async (element: { [x: string]: any; }) => {
            if ( !element['title'] || !element['story_title']){
                await this.create( <CreateblogDto> {
                    title: element ['title'],
                    story_title: element ['story_title'],
                    url: element ['url'],
                    story_url: element ['story_url'],
                    author:  element ['author'],
                    createdAt: element ['created_at']
                    }
                 )
            }
            
          });
        }
      ).catch(err => console.log(err))
    }
}
