import { Inject, Injectable } from '@nestjs/common';
import { IEventRouter } from '../../domain/interfaces/event-router.interface';
import { EEventType } from '../../domain/enumerators/event-type.enum';
import { InjectionTokens } from '../tokens/injection-tokens';
import { ReceiveEventDTO } from '../../domain/models/receive-event.dto';
import { RedisQueueService } from '../../infrastructure/queue/redis-queue.service';

@Injectable()
export class HandleEventUseCase {
  constructor(private readonly redisQueue: RedisQueueService) {}

  async execute(data: ReceiveEventDTO): Promise<void> {
	/**
	 * TODO: Implementar lógica de validação de payload
	 * TODO: Implementar lógica de validação de tipo de evento
	 * 
	 * TODO: Interpretar evento e inserir o payload no formato correto na fila
	 * TODO: Fazer um serviço que consome a fila e processa o evento
	 */
	this.redisQueue.enqueue(data);
  }
}
