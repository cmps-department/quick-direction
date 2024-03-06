export interface IMessage {
  id: number;
  requestId: number;
  userId: string;
  userName: string;
  userSurname: string;
  text: string;
  documentLinks: string[];
  createdAt: string;
  updatedAt: string;
}
