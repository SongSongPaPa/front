export interface ChatControlledUserDto {
  userId: number;
  expiredAt: number;
}

export interface ChatPublicDto {
  chatId: number;
  ownerId: number;
  adminId: number;
  type: string;
  name: string;
}

export interface ChatPrivateDto {
  room: string;
  password?: string;
  users: number[];
  kicked: ChatControlledUserDto[];
  muted: ChatControlledUserDto[];
  invited: number[];
}

export interface ChatSessionDto {
  public: ChatPublicDto;
  private: ChatPrivateDto;
}
