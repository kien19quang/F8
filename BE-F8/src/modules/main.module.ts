import { Module } from '@nestjs/common';
import { HomePageModule } from './home-page/home-page.module';
import { RoadMapModule } from './road-map/road-map.module';
import { BlogModule } from './blog/blog.module';
import { UserModule } from './user/user.module';
import { LearningModule } from './learning/learning.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    HomePageModule,
    RoadMapModule,
    BlogModule,
    UserModule,
    LearningModule,
    EmailModule,
  ],
  providers: [],
  controllers: [],
})
export class MainModule {}
