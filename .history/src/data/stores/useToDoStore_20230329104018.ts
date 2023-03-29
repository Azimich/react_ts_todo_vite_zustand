import create from 'zustand';
import { generateId } from './helpers';
import { devtools } from 'zustand/middleware'

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

const localStorageUpdate = <T extends State>(config)

export const useTuDoStore = create<ITaskStore>(devtools((set, get) => ({
  tasks: [],

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
})))