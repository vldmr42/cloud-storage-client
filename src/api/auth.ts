import axios from '@/core/axios';
import {
    LoginFormDTO,
    LoginResponseDTO,
    RegisterFormDTO,
    RegisterResponseDTO,
} from './dto/auth.dto';

export const login = async (
    values: LoginFormDTO
): Promise<LoginResponseDTO> => {
    const { data } = await axios.post<LoginResponseDTO>('/auth/login', values);
    return data;
};

export const register = async (
    values: RegisterFormDTO
): Promise<RegisterResponseDTO> => {
    return (await axios.post('/auth/register', values)).data;
};
