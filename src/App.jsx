import { useState } from 'react'
import bg from './assets/bg.jpg'
import './App.css'
import TodoList from './components/TodoList'

function App() {
  

  return (
    <div className='back'>
      <h1>To Do List App</h1>
      <div className='app1'>
        <TodoList/>
        </div>     
    </div>
  )
}

export default App
