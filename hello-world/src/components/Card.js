import React from 'react'
import exerciseImg from '../images/exercise.png'
import './styles/Card.css'
import circleImage from '../images/circles.png'


class Card extends React.Component{

  // constructor
  constructor(props){
    super(props)
    this.state = {
    image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc'
    }
  }

  componentDidMount(){
    // se ejecuta despues de un componente se monte
    setTimeout(() =>{
      this.setState({
        image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
      })
    },5000)
  }

  // background: url('../../images/circles.png') no-repeat, linear-gradient(to right, #A74CF2, #617BFB);
  render(){
    // si queremos quitar this.prop declarmos const
    // const{title,description,img,leftColor,rigtColor} = this.props
    return  (

      <div className="card mx-auto Fitness-Card"
      style={{
        // injeccion de props
        // backgroundImage:`url(${circleImage}), linear-gradient(to right, #A74CF2, #617BFB)`
        backgroundImage:`url(${circleImage}), linear-gradient(to right, ${this.props.leftColor}, ${this.props.rightColor})`

      }}

      >
        <div className="card-body">
            <div className="row center">
                <div className="col-6">
                    <img src={this.state.image} alt="cards images" className="float-right"/>
                </div>
                <div className="col-6 Fitness-Card-Info">
                  <h1>{this.props.title}</h1>
                  <p>{this.props.description}}</p>
                </div>
            </div>
        </div>
      </div>


    )
  }
}

export default Card
