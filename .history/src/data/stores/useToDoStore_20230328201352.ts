import {create} from 'zustand';
import { generateId } from './helpers';

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
  tasks: [
    {
      id: 'ffff',
      title: 'tttteee',
      createdAt: 12165
    }
  ],
  
  createTask: (title) => {
    const { tasks } = get();
    const newTask = {
      id: generateId(),
      title: title,
      createdAt: Date.now()
    }  
    
    set({
      tasks: [newTask].concat(tasks),
    })
  },

  updateTask: (id: string, title: string) => {
    const { tasks } = get();
    set({
      tasks: tasks.map((task) => ({
        ...task,
        title: task.id === id ? title : task.title,
      }))
    })
  },

  removeTask: (id: string) => {
    const { tasks } = get();
    set({
      tasks: tasks.filter((task) => task.id !== id)
    })
  },
}))