export interface ICategory {
    name: string,
    description: string,
    professor: string,
    color: string,
    subDirections: ISubCategory[]
}

export interface ISubCategory {
    name: string,
    additionalInfo: string,
    examplelink: string,
    additionallink: string,
    validationField: string,
    directionId: number
}

export interface IGetCategory extends ICategory{
    createdAt: string,
    updatedAt: string,
    id: number
}