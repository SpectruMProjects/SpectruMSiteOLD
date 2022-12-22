export interface RegisterDto {
    mail: string;
    username: string;
    password: string;
}

export type ChangePassDto = { mail: string; newPass: string };

export type GetWhiteListDto = { server: string };

export type GetWhiteListUserStatusDto = { server: string; username: string };

export interface LoginDto {
    login: string;
    password: string;
}