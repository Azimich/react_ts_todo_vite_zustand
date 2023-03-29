import {create} from 'zustand';

interface ITask {
  id: string;
  title: string;
  createdAt: number;
}

interface ITaskStore {
  tasks: ITask[];
  createTask: (title: string) => void;
  removeTask: (id: string) => void;
  updateTask: (title: string, id: string) => void;
}

export const useTuDoStore = create<ITaskStore>((set, get) => ({
  tasks: [{
    id: 'ffff',
    
  }],
  createTask: (title) => {
    const { tasks } = get();
    console.log(tasks, 11);    
  },
  updateTask: (id, title) => {},
  removeTask: (id) => {},
}))