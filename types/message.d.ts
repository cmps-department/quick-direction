interface IMessage {
    id: number;
    requestId: number;
    userId: string;
    userName: string;
    userSurname: string;
    text: string;
    isChecked: boolean;
    documentLinks: string[];
    createdAt: string;
    updatedAt: string;
}
