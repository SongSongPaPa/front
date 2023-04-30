//system이 true일 경우는 sourceId가 0일 수 있습니다.
//system이 true이면서 sourceId가 있는건 "누군가 나갔다" 이런거
//system이 true이면서 sourceId가 0인건 "방 정보가 바뀌었다" 이런거
export interface ChatMessage {
  message: string;
  sourceId: number;
  direct: boolean;
  system: boolean;
}
