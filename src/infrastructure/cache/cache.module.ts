import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-ioredis';
import { EventCacheService } from './cache.service';

@Module({
  imports: [
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => ({
        store: await redisStore({
          socket: {
            host: 'localhost', // ou 'redis' se rodando dentro do container
            port: 6379,
          },
          ttl: 60, // padrão: 60s
        }),
      }),
    }),
  ],
  providers: [EventCacheService],
  exports: [EventCacheService],
})
export class EventCacheModule {}
