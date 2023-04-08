import {
    Body,
    Controller,
    HttpCode,
    InternalServerErrorException,
    Logger,
    Post
} from "@nestjs/common";
import {RequestSignUpUserDto} from "./dto/request-sign-up-user.dto";
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    private readonly logger = new Logger(UserController.name);

    constructor(
        private readonly userService: UserService,
    ) {}

    @Post('/request-sign-up')
    @HttpCode(201)
    async requestSignUp(@Body() requestSignUpUserDto: RequestSignUpUserDto) {
        try {
            await this.userService.requestSignUp(requestSignUpUserDto);
        } catch (error) {
            this.logger.log(error);

            throw new InternalServerErrorException();
        }
    }
}