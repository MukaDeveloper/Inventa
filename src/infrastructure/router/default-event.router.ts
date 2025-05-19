import { Injectable, Logger } from '@nestjs/common';
import { IEventRouter } from '../../domain/interfaces/event-router.interface';
import { EEventType } from '../../domain/enumerators/event-type.enum';

@Injectable()
export class DefaultEventRouter implements IEventRouter {
  private readonly logger = new Logger(DefaultEventRouter.name);

  async route(event: { type: EEventType; payload: any }): Promise<void> {
	console.log('-----------------------------------------------------------')
    console.log(`Roteando evento do tipo ${event.type}`);
    console.log(`Descrição: '${event.payload.description ?? 'Sem descrição'}'`);
	console.log('-----------------------------------------------------------')

    switch (event.type) {
      case EEventType.HEALT_CHECK:
		console.log(`[${new Date().toLocaleString('pt-BR')}] >> Health Check`);
        // TODO: Implementar lógica de fila em memória ou redis
        break;

      case EEventType.PAYMENT:
        // TODO: Implementar lógica de fila em memória ou redis
        break;

      case EEventType.DISCORD:
        // TODO: Implementar lógica de fila em memória ou redis
        break;

      case EEventType.LANDING_PAGE:
        // TODO: Implementar lógica de fila em memória ou redis
        break;

      default:
        this.logger.warn(`Tipo de evento desconhecido: ${event.type}`);
    }
  }
}
