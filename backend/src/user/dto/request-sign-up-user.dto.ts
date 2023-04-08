import {IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength} from "class-validator";
import {UserRole, UserType} from "../types";

export class RequestSignUpUserDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    @MinLength(2)
    readonly name: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly patronymic?: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly surname: string;

    @IsEnum(UserRole)
    readonly role: UserRole = UserRole.DEFAULT;

    @IsEnum(UserType)
    readonly type: UserType = UserType.ORGANIC;

    @IsNotEmpty()
    @IsString()
    @MinLength(12)
    readonly password: string;
}