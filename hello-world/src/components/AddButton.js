import React from 'react'
import './styles/AddButton.css'
import botonImage from '../images/add.png'

function AddButton(props){
  return(
    <div className="card mx-auto Fitness-Card">
      <div className="mx-auto">
        <img src={botonImage} alt="cards images" className="float-right"/>
      </div>
    </div>
  )

}

export default AddButton
