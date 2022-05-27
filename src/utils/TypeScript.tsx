export interface IData {
  text: string;
  id: number;
}

export interface Props {
  data: IData[];
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setTodos: React.Dispatch<React.SetStateAction<number>>;
}
