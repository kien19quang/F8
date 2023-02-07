import { BaseResponseDto } from '@/src/models/Api/ApiResponse';
import { AuthResponse, LoginDto, RegisterDto } from '@/src/models/Auth/AuthModel';
import axiosClient from 'src/apiClient/axiosClient';

const findEmailUser = async (email: string): Promise<BaseResponseDto<string | undefined>> => {
  const res = await axiosClient({
    method: 'GET',
    url: `/Auth/findEmailUser?email=${email}`
  });

  return res.data;
};

const registerUser = async (data: RegisterDto): Promise<BaseResponseDto<AuthResponse>> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axiosClient({
        method: 'POST',
        url: '/Auth/register',
        data
      });

      resolve(res.data);
    } catch (e) {
      reject(e);
    }
  });
};

const loginUser = async (data: LoginDto): Promise<BaseResponseDto<AuthResponse>> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosClient({
        method: 'POST',
        url: '/Auth/login',
        data
      });

      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });
};

const sendCodeToEmail = async (email: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosClient({
        method: 'POST',
        url: '/Auth/sendCodeVerify',
        data: { email }
      });
      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });
};

export { findEmailUser, registerUser, sendCodeToEmail, loginUser };
