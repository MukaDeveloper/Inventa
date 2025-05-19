import { Body, Controller, Post } from '@nestjs/common';
import { HandleEventUseCase } from '../../application/use-cases/handle-event.usecase';
import { ReceiveEventDTO } from '../../domain/models/receive-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly handleEvent: HandleEventUseCase) {}

  @Post()
  async receiveEvent(
    @Body() body: ReceiveEventDTO,
  ): Promise<{ status: string }> {
    await this.handleEvent.execute(body);
    return { status: 'ok' };
  }
}
