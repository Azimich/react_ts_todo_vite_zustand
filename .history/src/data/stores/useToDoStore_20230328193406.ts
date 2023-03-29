import create from 'zustand';

interface ITask {
  id: string;
  title: string;
  createdAt: number;
}

interface ITaskStore {
  task: ITask[];
  createTask: (title: string) => void;
  removeTask: (id: string) => void;
  updateTask: (title: string, id: string) => void;
}

export const useTuDoStore