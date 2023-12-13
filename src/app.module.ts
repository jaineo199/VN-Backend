import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://jaisarki123:GQvN3Mw80VmlMrcj@cluster0.oahi6cm.mongodb.net/?retryWrites=true&w=majority',
    ),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
