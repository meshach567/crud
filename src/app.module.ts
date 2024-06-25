import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { DatabaseModule } from "./database/database.module";
import { CitiesModule } from "./cities/cities.module";
import { UsersModule } from "./user/user.module";

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,
        AuthModule,
        UsersModule,
        CitiesModule,
    ],

    controllers: [AppController],
    providers: [AppService]

})

export class AppModule {}