import { useState,useContext } from 'react';
import { TaskContext } from '../context/TaskContext';


function TaskForm(){

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const {createTask} = useContext(TaskContext)
    console.log(createTask)

    const handleSubmit = (e) => {
        //cancela el comportamiento por defecto
        e.preventDefault()
        createTask(title,description)
        console.log(title)
        setTitle('')
        setDescription('')
    };
    
    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className='text-2xl font-bold text-white mb-3'>Crea Tu Tarea</h1>
                <input className='bg-slate-50 rounded-md p-3 w-full mb-2' placeholder="Escribe tu tarea" 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus
                >
                </input>
                <textarea className='bg-slate-50 rounded-md p-3 w-full mb-2' placeholder='Escribe la descripción'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                ></textarea>
                <button className='bg-green-400 p-2 rounded-md mb-2' >Guardar</button>
            </form>
        </div>

    )
}

export default TaskForm