// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /auth/login */
export async function AuthControllerUserLogin(
  body: API.UserLoginDto,
  options?: { [key: string]: any },
) {
  return request<API.LoginPayloadDto>('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /auth/register */
export async function AuthControllerUserRegister(
  body: API.UserRegisterDto,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      form.append(ele, typeof item === 'object' ? JSON.stringify(item) : item);
    }
  });

  return request<API.UserDto>('/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /auth/me */
export async function AuthControllerGetCurrentUser(options?: { [key: string]: any }) {
  return request<API.UserDto>('/auth/me', {
    method: 'GET',
    ...(options || {}),
  });
}
