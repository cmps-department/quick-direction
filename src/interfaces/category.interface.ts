export interface ICategory {
  name: string;
  description: string;
  professor: string;
  color: string;
  subDirections: ISubCategory[] | [] | ICreateSubCategory[];
}

export interface ISubCategory {
  name: string;
  description: string;
  examplelink: string;
  additionalInfo: string;
  downloadFile: boolean;
  textField: boolean;
  id?: number | null;
}

export interface ICreateSubCategory extends Omit<ISubCategory, 'directionId'> {}

export interface IGetCategory extends ICategory {
  createdAt: string;
  updatedAt: string;
  id: number;
}
