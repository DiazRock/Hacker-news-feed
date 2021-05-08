import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogDocument = Blog & Document;

@Schema()
export class Blog {
  @Prop()
  title: string;

  @Prop()
  story_title: string;

  @Prop()
  url: string;

  @Prop()
  story_url: string;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  author: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);