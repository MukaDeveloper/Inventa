import { Module } from "@nestjs/common";
import { InternalTypeOrmModule } from "./typeorm/typeorm.module";

@Module({
	imports: [InternalTypeOrmModule],
	providers: [],
	exports: [InternalTypeOrmModule],
})
export class infrastructureModule { }