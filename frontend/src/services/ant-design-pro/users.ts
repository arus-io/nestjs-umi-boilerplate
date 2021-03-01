// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /users/admin */
export async function UserControllerAdmin(options?: { [key: string]: any }) {
  return request<any>('/users/admin', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /users/users */
export async function UserControllerGetUsers(
  params: {
    // query
    order?: 'ASC' | 'DESC';
    page?: number;
    take?: number;
    q?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UsersPageDto>('/users/users', {
    method: 'GET',
    params: {
      // order has a default value: ASC
      order: 'ASC',
      // page has a default value: 1
      page: '1',
      // take has a default value: 10
      take: '10',
      ...params,
    },
    ...(options || {}),
  });
}
