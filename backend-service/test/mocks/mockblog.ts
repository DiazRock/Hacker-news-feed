import { Blog } from "src/blog/schemas/blog.schema";

export const mockBlog = (
    title= 'title',
    story_title= 'story_title',
    url= 'url',
    story_url= 'story_url',
    author= 'author',
    createdAt= new Date(2018, 11, 24, 10, 33)
  ) :Blog =>  ({
    title,
    story_title,
    url,
    story_url,
    author,
    createdAt  
  })