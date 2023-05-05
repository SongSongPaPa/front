export interface UserInfoDto {
  userId: number;
  username: string;
  state: string;
  profile: string;
}

export interface UserSocketDto extends UserInfoDto {
  follows: Array<number>;
  blocks: Array<number>;
  room: string;
}
