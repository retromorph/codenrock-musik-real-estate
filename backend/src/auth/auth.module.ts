import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {UserModule} from "../user/user.module";
import {AuthController} from "./auth.controller";
import {JwtModule} from "@nestjs/jwt";
import {jwtConfig} from "../config/jwt.config";

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: jwtConfig().secret!,
            signOptions: {expiresIn: '60s'},
        }),
        UserModule
    ],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
