import { ArticleService } from './articles.service';
import { ArticleController } from './articles.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AuthMiddleware } from '../auth/auth.middleware';
@Module({
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticlesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('api/v1/articles');
  }
}
