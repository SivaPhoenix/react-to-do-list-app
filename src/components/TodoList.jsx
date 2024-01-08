import React from 'react'
import { useState } from 'react';
import TodoItem from './ToDoItem';
function TodoList() {
    const [tasks, setTasks] = useState([
        {
        id: 1,
        text: 'Go to College',
        completed: false
        },
        //siva
        {
        id: 2,
        text: 'Coding',
        completed: true
        }
        ]);
    
        const [text, setText] = useState('');
        function addTask(text) {
         const newTask = {
         id: Date.now(),
         text,
         completed: false
         };
         setTasks([...tasks, newTask]);
         setText('');
         }
        function deleteTask(id) {
         setTasks(tasks.filter(task => task.id !== id));
         }
        function toggleCompleted(id) {
         setTasks(tasks.map(task => {
         if (task.id === id) {
         return {...task, completed: !task.completed};
         } else {
         return task;
         } 
         }));
         }
  return (
    <div className="todo-list">
    <div className='todo-siva'>
    <input
    value={text}
    placeholder='Enter the work to do'
    onChange={e => setText(e.target.value)} 
    />
    <button className='add' onClick={() => addTask(text)}>ADD ME</button>
    </div>
    {tasks.map(task => (
    <TodoItem
    key={task.id} 
    task={task}
    deleteTask={deleteTask}
    toggleCompleted={toggleCompleted} 
    />
    ))}
    
    </div>

  )
}

export default TodoList
