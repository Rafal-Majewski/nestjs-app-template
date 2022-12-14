import {TypeOrmModule} from "@nestjs/typeorm";
import {AppConfig} from "../app-config/index.js";
import {CatEntity} from "../features/cats/index.js";

const AppOrmModule = TypeOrmModule.forRootAsync({
	inject: [AppConfig],
	useFactory: (config: AppConfig) => ({
		type: "postgres",
		host: config.POSTGRES_HOST,
		port: config.POSTGRES_PORT,
		username: config.POSTGRES_USERNAME,
		password: config.POSTGRES_PASSWORD,
		database: config.POSTGRES_DATABASE,
		entities: [CatEntity],
		synchronize: false,
	}),
});

export default AppOrmModule;
