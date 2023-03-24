export{}
// import React, {
//     createContext, useEffect, useState, useContext,
//   } from 'react';
// import * as productsApi from './api';
// import { Product } from "../../types/products";

//   // interface TasksContextInterface {
//   //   tasks: Task[];
//   //   addTask: (title: string) => void;
//   //   getTasks: () => Promise<Task[]>;
//   // }
  
//   // export const TasksContext = createContext<TasksContextInterface>({
//   //   tasks: [],
//   //   addTask: (title: string) => undefined,
//   //   getTasks: async () => []
//   // });
  
//   const TasksContextProvider = ({ children }: { children?: any }) => {
//     const [tasks, setTasks] = useState<Task[]>([]);
//     const getTasks = async (): Promise<Task[]> => {
//         return tasks;
//     };

//     const addTask = async (title: string) => {
//         await tasksApi.create(title);
//         setTasks([...tasks, { title }])
//     }

//     const loadTasks = async () => {
//       setTasks(await tasksApi.getAll());
//     };
  
//     useEffect(() => {
//         loadTasks();
//     }, []);
  
//     return (
//       <TasksContext.Provider
//         value={{
//           tasks,
//           getTasks,
//           addTask,
//         }}
//       >
//         {children}
//       </TasksContext.Provider>
//     );
//   };
  
  
//   export default TasksContextProvider;
  