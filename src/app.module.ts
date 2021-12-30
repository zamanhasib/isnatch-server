import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SaleModule } from './modules/sale/sale.module';
import { RewardsModule } from './modules/rewards/rewards.module';
import { UserModule } from './modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [RewardsModule, SaleModule, UserModule, 
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DB_CONNECTION)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
