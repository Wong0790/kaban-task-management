export type Subtask = {
  id?: number;
  name: string;
  completed: boolean;
};

export type Column = {
  id?: number;
  name: string;
};

export type Task = {
  id?: number;
  title: string;
  description: string;
  subtasks: Array<Subtask>;
  boardId: number | undefined;
  columnId: number;
};

export type Board = {
  id?: number;
  active: boolean;
  title: string;
  columns: Array<Column>;
  tasks: Array<Task>;
};
