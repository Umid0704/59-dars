import React from 'react'
import Users from './components/1/Users';
import Total from './components/2/Total';
import Next from './components/3/Next';
export default function App() {
  return (
    <div>
    <h1 >1-task</h1>
  <Users/>
  <h1 className="mt-20"> 2-task</h1>
  <Total/>
     <h2 className="mt-20">3-task</h2>
     <Next/>
    </div>
    
  )
}
