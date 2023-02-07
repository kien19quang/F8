import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MainModule } from './modules/main.module';

@Module({
  imports: [
    MainModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
