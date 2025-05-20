import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import Redis from 'ioredis';
import { IEventRouter } from '../../domain/interfaces/event-router.interface';
import { InjectionTokens } from '../../application/tokens/injection-tokens';

@Injectable()
export class RedisQueueService implements OnModuleInit {
  private client = new Redis({ host: 'localhost', port: 6379 });

  constructor(
    @Inject(InjectionTokens.EventRouter) private readonly router: IEventRouter,
  ) {}

  async enqueue(event: any) {
    await this.client.lpush('event_queue', JSON.stringify(event));
  }

  async onModuleInit() {
    this.processQueue();
  }

  private async processQueue() {
    while (true) {
      try {
        const res = await this.client.brpop('event_queue', 0);
        if (!res) continue;

        const event = JSON.parse(res[1]);
        console.log('✅ Processando evento da fila:', event);

        // Aqui você pode chamar casos de uso com base em event.type
        await this.router.route(event);
      } catch (err) {
        console.error('Erro ao processar fila:', err);
      }
    }
  }
}
