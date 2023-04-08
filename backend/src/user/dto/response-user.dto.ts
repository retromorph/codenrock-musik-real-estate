import {UserRole, UserType} from "../types";

export class ResponseUserDto {
    name: string;

    patronymic: string | undefined;

    surname: string;

    email: string;

    phone: string;

    avatarUri: string | undefined;

    role: UserRole;

    type: UserType;
}