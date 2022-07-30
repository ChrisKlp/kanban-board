export type TSubtask = {
  title: string;
  isCompleted: boolean;
};

export type TTask = {
  title: string;
  description: string;
  status: string;
  subtasks: TSubtask[];
};

export type TTaskColumn = {
  name: string;
  tasks: TTask[];
};

export type TBoard = {
  name: string;
  columns: TTaskColumn[];
};
