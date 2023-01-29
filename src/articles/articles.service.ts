import { Injectable } from '@nestjs/common';
import { Article } from './articles';
import { PrismaClient } from '@prisma/client';
import { ArticleUser } from './articlesUser';
@Injectable()
export class ArticleService {
  prisma = new PrismaClient();

  async create(article: Article): Promise<Article> {
    return this.prisma.article.create({ data: article });
  }

  async findAll(userId: string): Promise<Article[]> {
    const responseDbArticle = await this.prisma.article.findMany({
      where: {
        user: {
          id: {
            equals: userId,
          },
        },
      },
    });
    return responseDbArticle;
  }
  async findMany(userId: string): Promise<ArticleUser[]> {
    const responseDbArticle = await this.prisma.article.findMany({
      where: {
        user: {
          id: {
            not: userId,
          },
        },
      },
      include: {
        user: true,
      },
    });
    return responseDbArticle;
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
