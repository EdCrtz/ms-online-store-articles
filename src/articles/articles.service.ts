import { Injectable } from '@nestjs/common';
import { Article } from './articles';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class ArticleService {
  prisma = new PrismaClient();

  async create(article: Article): Promise<Article> {
    return this.prisma.article.create({ data: article });
  }

  async findAll(): Promise<Article[]> {
    return this.prisma.article.findMany();
  }

  async findOne(id: string): Promise<Article> {
    return this.prisma.article.findFirst({ where: { id } });
  }

  async update(id: string, article: Article): Promise<Article> {
    return this.prisma.article.update({ where: { id }, data: article });
  }

  async remove(id: string): Promise<Article> {
    return this.prisma.article.delete({ where: { id } });
  }
}
