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

interface ChatPrivateDto {
  room: string;
  password?: string;
  users: number[];
  kicked: ChatControlledUserDto[];
  muted: ChatControlledUserDto[];
  invited: number[];
}

interface ChatSessionDto {
  public: ChatPublicDto;
  private: ChatPrivateDto;
}

export default ChatSessionDto;
