export const RequestStatus = {
    Submitted: "Submitted",
    Processing: "Processing",
    Clarify: "Clarify",
    Clarified: "Clarified",
    Processed: "Processed",
    Canceled: "Canceled",
} as const;

export const RequestStatusTraslit = {
    Submitted: "Надіслано",
    Processing: "В обробці",
    Clarify: "Потребує уточнення",
    Clarified: "Уточнений",
    Processed: "Опрацьований",
    Canceled: "Скасований",
} as const;
