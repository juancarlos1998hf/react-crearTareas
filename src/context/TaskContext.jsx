import {  createContext, useState, useEffect } from "react"
import { tasks } from "../data/task"



export const TaskContext = createContext()

export function TaskContextProvider(props){

    const [task, setTask] = useState([])

    function createTask(taskTitle,taskDescription){
        setTask([...task,  {
          title: taskTitle,
          id: task.length,
          description: taskDescription
        }])
    }

    function deleteTask(taskId){
        //por cada tarea
        setTask(task.filter(task => task.id !== taskId))
        console.log(taskId)
      }
    
    useEffect(() => {
        setTask(tasks)
    },[])

    return (
        <TaskContext.Provider value={{task: task,
          deleteTask,
          createTask
          
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
