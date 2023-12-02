export interface LoginFormDTO {
    email: string;
    password: string;
}

export interface LoginResponseDTO {
    token: string;
}

export type RegisterFormDTO = LoginFormDTO & { fullname: string };
export type RegisterResponseDTO = LoginResponseDTO;
