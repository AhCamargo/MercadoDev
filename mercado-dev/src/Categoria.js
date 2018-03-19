import React, {Component} from 'react'
import axios from 'axios'


// https://mercado-dev-adb83.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22automoveis%22
class Categoria extends Component{
    constructor(props){
        super(props)
        const url = 'https://mercado-dev-adb83.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22paracasa%22'
        axios
           .get(url)
           .then( data => {
               console.log(data)
           }) 
    }
    render(){
        return (
            <h1>Categoria: {JSON.stringify(this.props.match.params.urlCategoria)}</h1>
        )
    } 
}
export default Categoria

//parei no 3 video , 1:07:14