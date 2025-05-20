import { Module } from "@nestjs/common";
import { InternalTypeOrmModule } from "./database/typeorm/typeorm.module";
import { EventCacheModule } from "./cache/cache.module";

@Module({
	imports: [InternalTypeOrmModule, EventCacheModule],
	providers: [],
	exports: [InternalTypeOrmModule, EventCacheModule],
})
export class infrastructureModule { }