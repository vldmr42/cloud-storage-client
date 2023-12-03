import axios from '@/core/axios';
import {
    LoginFormDTO,
    LoginResponseDTO,
    RegisterFormDTO,
    RegisterResponseDTO,
    User,
} from './dto/auth.dto';
import { destroyCookie } from 'nookies';

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

export const getMe = async (): Promise<User> => {
    return (await axios.get('/users/me')).data;
};

export const logout = () => {
    destroyCookie(null, '_token', { path: '/' });
};
