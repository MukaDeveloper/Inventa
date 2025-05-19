import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'Muka -- INVENTA -- API\n\nInventando o futuro, um evento de cada vez.\n\n1.0.0';
  }
}
