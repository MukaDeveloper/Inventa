import { Body, Controller, Post } from '@nestjs/common';
import { HandleEventUseCase } from 'src/application/use-cases/handle-event.usecase';
import { ReceiveEventDTO } from 'src/domain/models/receive-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly handleEvent: HandleEventUseCase) {}

  @Post()
  async receiveEvent(
    @Body() body: ReceiveEventDTO,
  ): Promise<{ status: string }> {
    await this.handleEvent.execute(body.type, body.payload);
    return { status: 'ok' };
  }
}
