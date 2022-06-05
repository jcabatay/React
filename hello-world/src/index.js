/*
 * source: https://www.youtube.com/watch?v=zLP1fFxY__o&list=PLIddmSRJEJ0vEBB6ECegg35IQ-sWjSDdo&index=6
 * git tutorial: https://github.com/rulpalacios/FitnessApp
*/

/*
* Hello React ejemplo comentado
*/

// const element = document.createElement('h1')
// element.innerText = 'Hello React'
// const container = document.getElementById('root')
// container.appendChild(element)

import react from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'//componente


/* Hello ReactDom */

const user = {
  firstName: 'Joel',
  lastName: 'Cabatay'
  // avatar: 'images/chico-icon.png'

}

/* Muestra el nombre*/
const name = 'ascii274'
const element = <h1>Hello {name}</h1>
const container = document.getElementById('root')
ReactDOM.render(element,container)


/* Muestra nombre con function */

function getName(user){
  return `${user.firstName} ${user.lastName}`
}

const elementGetName = <h1>Hello {getName(user)}</h1>
const containerName = document.getElementById('name')
// ReactDOM.render(__QUE__, __DONDE__)
ReactDOM.render(elementGetName, containerName)



/* Muestra nombre con function if*/
function getGreeting(user){
  if(user){
    return <h1>Hello {getName(user)}</h1>
  }
  return <h1>Hello Stranger</h1>
}


const elementGreeting = <div>{getGreeting()}</div>
const containerGreeting = document.getElementById('greeting')
ReactDOM.render(elementGreeting,containerGreeting)

/* */
const elementImage = <img src={require("./images/chico-icon.png")} width="100" height="100"/>
// const elementImage = <img src={user.avatar}/>
const containerImage = document.getElementById('divAvatar')
ReactDOM.render(elementImage,containerImage)


/* uso componente*/

const containerComponente = document.getElementById('divComponente')
ReactDOM.render(<Card/>,containerComponente)
