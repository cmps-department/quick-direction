type TRequestStatus = "Submitted" | "Processing" | "Clarify" | "Clarified" | "Processed" | "Canceled";

interface IRequest {
    id: number;
    userId: string;
    name: string;
    surname: string;
    studentGroup: string;
    email: string;
    text: string;
    documentLink: string;
    status: TRequestStatus;
    directionId: number;
    direction: {
        id: number;
        name: string;
        description: string;
        professor: string;
        color: string;
        createdAt: string;
        updatedAt: string;
    };
    subDirectionId: number;
    subDirection: {
        id: number;
        name: string;
        description: string;
        examplelink: string;
        additionalInfo: string;
        downloadFile: boolean;
        textField: boolean;
        directionId: number;
        createdAt: string;
        updatedAt: string;
    };
    messages: IMessage[];
    createdAt: string;
    updatedAt: string;
}

interface RequestPayload {
    name: string;
    surname: string;
    email: string;
    studentGroup: string;
    userId: string;
    directionId: number;
    subDirectionId: number;
    status: TRequestStatus;
    text?: string;
    documentLink?: string;
}
