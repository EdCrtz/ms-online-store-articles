import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [ArticlesModule],
  providers: [AppService],
})
export class AppModule {}
