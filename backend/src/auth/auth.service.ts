import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import * as Option from "fp-ts/Option"
import * as bcrypt from "bcrypt"
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async signIn(email: string, password: string): Promise<any> {
        const userOption = await this.userService.findOneByEmail(email);

        if (Option.isNone(userOption)) {
            throw new UnauthorizedException();
        }

        if (!await bcrypt.compare(userOption.value.password, password)) {
            throw new UnauthorizedException();
        }

        const payload = { email: userOption.value.email, sub: userOption.value.id }

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
