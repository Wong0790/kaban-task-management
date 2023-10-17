export type Subchild = {
  id?: number;
  name: string;
};

export type Task = {
  id?: number;
  title: string;
  description: string;
  subtasks: Array<Subchild>;
  columnId?: number;
};

export type Board = {
  id?: number;
  active: boolean;
  title: string;
  columns: Array<Subchild>;
  tasks: Array<Task>;
};
