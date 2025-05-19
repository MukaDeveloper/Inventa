import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ApiExceptionFilter } from './application/exceptions/api-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true,
      whitelist: true,
    }),
  );
  app.useGlobalFilters(new ApiExceptionFilter());

  const port = process.env.PORT || 3000;
  const server = await app.listen(port);

  // Verifica se está rodando local ou em produção
  const isProd = process.env.NODE_ENV === 'production';
  await app.listen(process.env.PORT ?? 3000);

  Logger.log('Server is listening on: ', server.address());
}
bootstrap();
