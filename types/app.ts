export type Column = {
  id?: number;
  name: string;
};

export type Board = {
  id?: number;
  active: boolean;
  title: string;
  columns: Array<Column>;
};
