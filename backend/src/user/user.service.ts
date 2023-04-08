import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {UserEntity} from "./user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {FileService} from "../shared/file/file.service";
import * as Option from "fp-ts/Option"
import {pipe} from "fp-ts/function";
import {plainToInstance} from "class-transformer";
import {ResponseUserDto} from "./dto/response-user.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private readonly fileService: FileService,
    ) {
    }

    async findOneOrFail(id: number): Promise<ResponseUserDto> {
        const user = await this.userRepository.findOneOrFail({
            where: {
                id,
            }
        });

        const avatarUri = pipe(
            await this.fileService.findOne(user.avatarId),
            Option.map(file => file.url)
        );

        return plainToInstance(
            ResponseUserDto,
            {
                ...user,
                avatarUri: Option.toUndefined(avatarUri),
            }
        )
    }
}