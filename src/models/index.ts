export type TSubtask = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type TTask = {
  id: string;
  title: string;
  description: string;
  status: string;
  subtasks: TSubtask[];
};

export type TTaskColumn = {
  id: string;
  name: string;
  tasks: TTask[];
};

export type TBoard = {
  id: string;
  name: string;
  columns: TTaskColumn[];
};
