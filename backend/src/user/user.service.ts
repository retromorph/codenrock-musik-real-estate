import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {UserEntity} from "./user.entity";
import {InjectRepository} from "@nestjs/typeorm";
// import {FileService} from "../shared/file/file.service";
import * as Option from "fp-ts/Option"
// import {pipe} from "fp-ts/function";
// import {plainToInstance} from "class-transformer";
// import {ResponseUserDto} from "./dto/response-user.dto";
import {RequestSignUpUserDto} from "./dto/request-sign-up-user.dto";
import * as bcrypt from "bcrypt"
import {UserStatus} from "./types";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        // private readonly fileService: FileService,
    ) {
    }

    // it is temporary method for demonstration
    async requestSignUp(requestSignUpUserDto: RequestSignUpUserDto): Promise<void> {
        const password = await bcrypt.hash(requestSignUpUserDto.password, 5);

        const user = await this.userRepository.create({
            ...requestSignUpUserDto,
            password,
            status: UserStatus.ACTIVE, // TODO change to PENDING
        })

        await this.userRepository.save(user);

        // TODO send email
    }



    async findOneByEmail(email: string): Promise<Option.Option<UserEntity>> {
        const foundByEmail = await this.userRepository.findOne({
            where: {
                email
            }
        })

        return Option.fromNullable(foundByEmail);
    }

    // async findOneOrFailResponse(id: number): Promise<ResponseUserDto> {
    //     const user = await this.userRepository.findOneOrFail({
    //         where: {
    //             id,
    //         }
    //     });
    //
    //     const avatarUri = pipe(
    //         await this.fileService.findOne(user.avatarId),
    //         Option.map(file => file.url)
    //     );
    //
    //     return plainToInstance(
    //         ResponseUserDto,
    //         {
    //             ...user,
    //             avatarUri: Option.toUndefined(avatarUri),
    //         }
    //     )
    // }
}