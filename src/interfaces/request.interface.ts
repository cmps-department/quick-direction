import { RequestStatus } from "../constants/request-status";

export interface RequestPayload {
    name: string,
    surname: string,
    email: string,
    userId: string,
    directionId: number,
    status: keyof typeof RequestStatus,
    text?: string,
    documentLink?: string
}