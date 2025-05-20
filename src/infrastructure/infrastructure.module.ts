import { Module } from "@nestjs/common";
import { DatabaseTypeOrmModule } from "./database/typeorm/typeorm.module";
import { EventCacheModule } from "./cache/cache.module";
import { DatabaseMongoDbModule } from "./database/mongodb/typeorm.module";

@Module({
	imports: [DatabaseTypeOrmModule, DatabaseMongoDbModule, EventCacheModule],
	providers: [],
	exports: [DatabaseTypeOrmModule, DatabaseMongoDbModule, EventCacheModule],
})
export class infrastructureModule { }