import React from 'react'
import './styles/Welcome.css'

// funciones JavaScript se llama tambien componente funcionales
function Welcome(props){
  return (
    <div className="container">
      <div className="Fitness-User-Info">
        <h1>Hello {props.username}!</h1>
        <p>Lert's workout to get someone gains! </p>

      </div>
    </div>


  )

}

export default Welcome
