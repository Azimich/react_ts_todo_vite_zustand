import create, {State, StateCreator} from 'zustand';
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

// const localStorageUpdate = <T extends State>(config: StateCreator<T>)
// StateCreator<T> => (set, get, api) => config((nextState) => {
//   if (isToDoStore(nextState)) {
//     window.localStorage.setItem('tasks', JSON.stringify(
//       nextState.tasks
//     ))
//   }
// })

function isToDoStore(obj: any): obj is ITaskStore {
  return 'tasks' in obj
}

const localStorageUpdate = <T extends State> (config: StateCreator<T>):
StateCreator<T> => (set, get, api) => config((nextState, ...args) => {
 if (isToDoStore(nextState)) {  
    window.localStorage.setItem('tasks', JSON.stringify(
      nextState.tasks
    ))
  }
  set(nextState, ...args)
}, get, api)

const getCurrentState = () => {
  try {
    const currentState = (JSON.parse(window.localStorage.getItem('tasks') || '[]')) as ITask[]
    return currentState
  } catch (error) {
    window.localStorage.setItem(tasks)
  }
}

export const useTuDoStore = create<ITaskStore>(localStorageUpdate(devtools((set, get) => ({
  tasks: currentState,

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
}))))