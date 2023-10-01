import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({

  imports: [

    TypeOrmModule.forRoot({

      type: 'mysql',
      port: 3306,
      host: 'localhost',
      username: 'root',
      password: '123',
      database: 'nestjs-oauth2-google',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true

    }),

    AuthModule,

    UserModule

  ],

})
export class AppModule { }
