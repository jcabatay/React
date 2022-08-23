import React from 'react'
import { BrowserRouter, Route } from  'react-router-dom'
import Exercises from '../pages/Exercises'
import ExerciseNew from '../pages/ExerciseNew'

function App(){
  return (
    <BrowserRouter>
        <Route path="/exercise" component={Exercises} />
        <Route path="/exercises/new" component={ExerciseNew} />
    </BrowserRouter>
  )
}

export default App
