export interface AuthResponseDto {
  status: number;
  message: string;
  twoFactor?: string;
  firstAccess?: boolean;
}

export interface TokenDto {
  accessToken?: string;
  refreshToken?: string;
  sign?: string;
  code?: string;
}
