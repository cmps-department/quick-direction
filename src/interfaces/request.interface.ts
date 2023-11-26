import { RequestStatus } from "../constants/request-status";
import { IMessage } from "./message.interface";

export interface IRequest {
    id: number; 
    userId: string;
    name: string;
    surname: string;
    studentGroup: string;
    email: string; 
    text: string;
    documentLink: string;
    status: keyof typeof RequestStatus;
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
        id: 4,
        name: string;
        description: string;
        examplelink: string;
        additionalInfo: string;
        downloadFile: boolean;
        textField: boolean;
        directionId: number;
        createdAt: string;
        updatedAt: string;
    },
    messages: IMessage[];
    createdAt: string;
    updatedAt: string;
}


export interface RequestPayload {
    name: string,
    surname: string,
    email: string,
    studentGroup: string,
    userId: string,
    directionId: number,
    subDirectionId: number,
    status: keyof typeof RequestStatus,
    text?: string,
    documentLink?: string
}