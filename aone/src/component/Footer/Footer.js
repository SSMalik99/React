import React,{Component} from 'react';
import './Footer.css'

class Footer extends Component{
    constructor(){
        super()
        this.state={
            title:"i'm the footer"
        }
    }
    
    render(){
        return(
            <div>
                <hr/>
                <h2>&copy; Aone</h2>
                <h3>{this.state.title}</h3>
            </div>
        )
    }
}

export default Footer