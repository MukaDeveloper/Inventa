import { Module } from "@nestjs/common";
import { HandleEventUseCase } from "./use-cases/handle-event.usecase";
import { DefaultEventRouter } from "../infrastructure/router/default-event.router";

@Module({
	imports: [],
	providers: [HandleEventUseCase, { provide: 'IEventRouter', useClass: DefaultEventRouter }],
	exports: [HandleEventUseCase],
})
export class ApplicationModule {}