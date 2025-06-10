import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('events')
@ApiTags('Eventos')
export class EventsController {
  constructor() {}

  @Post()
  async receiveEvent(@Body() body: any): Promise<{ status: string }> {
    return { status: 'ok' };
  }
}
