import axios from '@/core/axios';
import { LoginFormDTO, LoginResponseDTO } from './dto/auth.dto';

export const login = async (
    values: LoginFormDTO
): Promise<LoginResponseDTO> => {
    const { data } = await axios.post<LoginResponseDTO>('/auth/login', values);
    return data;
};
