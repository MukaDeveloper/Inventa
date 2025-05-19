import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from 'process';
import { ConfigModule } from '@nestjs/config';

const synchronize = env.NODE_ENV !== 'production';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        type: 'postgres',
        host: env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '5432', 10),
        username: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_NAME,
        autoLoadEntities: true,
        synchronize,
      }),
    }),
  ],
  providers: [],
  exports: [],
})
export class InternalTypeOrmModule {}
