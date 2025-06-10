import { Module } from "@nestjs/common";
import { EventsController } from "../controllers/events.controller";

@Module({
    imports: [],
    controllers: [EventsController],
})
export class EventsPresentationModule {}