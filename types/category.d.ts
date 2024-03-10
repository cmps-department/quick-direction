interface ICategory {
    name: string;
    description: string;
    professor: string;
    color: string;
    subDirections: ISubCategory[] | [] | ICreateSubCategory[];
}

interface ISubCategory {
    name: string;
    description: string;
    examplelink: string;
    additionalInfo: string;
    downloadFile: boolean;
    textField: boolean;
    id?: number | null;
}

interface ICreateSubCategory extends Omit<ISubCategory, "directionId"> {}

interface IGetCategory extends ICategory {
    createdAt: string;
    updatedAt: string;
    id: number;
}
