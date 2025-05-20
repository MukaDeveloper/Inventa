import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class EventCacheService {
  constructor(@Inject(CACHE_MANAGER) private cache: Cache) {}

  async set(key: string, value: any, ttl = 60): Promise<void> {
    await this.cache.set(key, value, ttl);
  }

  async get<T>(key: string): Promise<T | null> {
    return this.cache.get<T>(key);
  }

  async del(key: string): Promise<void> {
    await this.cache.del(key);
  }
}