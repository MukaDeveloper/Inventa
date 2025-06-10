import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export const rabbitMqProvider = {
  provide: 'RABBITMQ_CLIENT',
  useFactory: () => ClientProxyFactory.create({
    transport: Transport.RMQ,
    options: {
      urls: [
        `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASS}@rabbitmq:5672`,
      ],
      queue: 'cannoli_queue',
      queueOptions: { durable: true },
    },
  }),
};