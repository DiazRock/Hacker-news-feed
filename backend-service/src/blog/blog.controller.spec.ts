import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service'
import { CreateblogDto } from './dto/create-blog.dto';
import { Blog } from './schemas/blog.schema';
import { mockBlog } from '../../test/mocks/mockblog'



describe('BlogController', () => {
  let controller: BlogController;
  let service: BlogService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogController],
      providers: [
        BlogService,
        {
          provide: getModelToken('Blog'),
          useValue: {
            findAll: jest.fn().mockResolvedValue(mockBlog())
          }
        }
      ]
      
    }).compile();

    controller = module.get<BlogController>(BlogController);
    service = module.get<BlogService>(BlogService);
  });
  describe('index', () => {
    it('should return an array of posts', async () => {
      jest.spyOn(service, 'findAll').mockImplementation(() => Promise.resolve([ mockBlog() ]));
      await expect(controller.index()).resolves.toEqual(
        [mockBlog()]
      );
    })
  })
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
