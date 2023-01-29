import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Response,
  HttpStatus,
} from '@nestjs/common';

import { ArticleService } from './articles.service';
import { Article } from './articles';
import { ArticleUser } from './articlesUser';
@Controller('api/v1/articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  async create(@Body() article: Article, @Response() res) {
    const user = res.locals.user;
    article.userId = user.id;
    const response = await this.articleService.create(article);
    return res.status(HttpStatus.OK).send(response);
  }
  // Busdcar todos los productos sean solo de el empleado actual
  @Get()
  async findAllUser(@Response() res) {
    const user = res.locals.user;
    const x = await this.articleService.findAll(user.id);
    return res.status(HttpStatus.OK).send(x);
  }
  // Busdcar todos los productos que no sean de el empleado actual
  @Get('find/all')
  async findArticlesOtherUsers(@Response() res): Promise<ArticleUser[]> {
    const user = res.locals.user;
    const x = await this.articleService.findMany(user.id);
    return res.status(HttpStatus.OK).send(x);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Article> {
    return this.articleService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() article: Article) {
    return this.articleService.update(id, article);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.articleService.remove(id);
  }
}
