import React,  {Component} from 'react'
import axios from 'axios'

const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText : '',
            outputText: ''
        }
        this.textChanged = this.textChanged.bind(this)
    }

    textChanged(event) {
        var name = event.target.value
        this.setState({outputText: name})
        this.setState({inputText: name})
        
    }
    // Crear el DOM virtual
    render() {
        return (
            <div>
                <input onChange={this.textChanged} value={this.state.inputText}/>
                <br/>
                <a> Hola {this.state.outputText} cómo estás? </a>
            </div>
        )
    }
}


class Nasa extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgUrl: ''
        }
        this.getImage = this.getImage.bind(this)
    }

    getImage(event) {
        var self = this
        axios.get(url)
             .then(function(response) {
                 console.log("resposen", response)
                 self.setState({imgUrl: response.data.url})
             })
             .catch(function(error) {
                 console.error("error: ", error)
             })
    }

    render() {
        return (
            <div>
                <img src={this.state.imgUrl}/>
                <br/>
                <button onClick={this.getImage} >Get</button>
            </div>
        )
    }
}
export  {App, Nasa }
