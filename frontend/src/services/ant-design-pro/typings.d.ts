// @ts-ignore
/* eslint-disable */

declare namespace API {
  type UserLoginDto = {
    email: string;
    password: string;
  };

  type UserDto = {
    firstName?: string;
    lastName?: string;
    username?: string;
    role?: 'USER' | 'ADMIN';
    email?: string;
    avatar?: string;
    phone?: string;
  };

  type TokenPayloadDto = {
    expiresIn: number;
    accessToken: string;
  };

  type LoginPayloadDto = {
    user: UserDto;
    token: TokenPayloadDto;
  };

  type UserRegisterDto = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
  };

  type PageMetaDto = {
    page: number;
    take: number;
    itemCount: number;
    pageCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };

  type UsersPageDto = {
    data: UserDto[];
    meta: PageMetaDto;
  };
}
