import React from 'react'
import Card from './Card'

// componente funcional
function ExerciseList(props){
  return (
      <div>

          {
            props.exercises.map((exercise)=>{
              return(
                <Card
                      title={exercise.title}
                      description={exercise.description}
                      // img={"https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"}
                      img={exercise.img}
                      leftColor={exercise.leftColor}
                      rightColor={exercise.rightColor}
                />
                )
            })}
      </div>

  )
}

export default ExerciseList
