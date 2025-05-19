import { Inject, Injectable } from '@nestjs/common';
import { IEventRouter } from '../../domain/interfaces/event-router.interface';
import { EEventType } from '../../domain/enumerators/event-type.enum';
import { InjectionTokens } from '../tokens/injection-tokens';
import { ReceiveEventDTO } from '../../domain/models/receive-event.dto';

@Injectable()
export class HandleEventUseCase {
  constructor(@Inject(InjectionTokens.EventRouter) private readonly router: IEventRouter) {}

  async execute(data: ReceiveEventDTO): Promise<void> {
	/**
	 * TODO: Implementar lógica de validação de payload
	 * TODO: Implementar lógica de validação de tipo de evento
	 * 
	 * TODO: Interpretar evento e inserir o payload no formato correto na fila
	 * TODO: Fazer um serviço que consome a fila e processa o evento
	 */
    await this.router.route(data);
  }
}
