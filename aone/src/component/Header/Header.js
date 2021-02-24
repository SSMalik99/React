import React,{Component} from 'react';
import './Header.css'

class Header extends Component{
    constructor(){
        super()
        this.state = {
            title:"i'm the Header",
            userText:`i'm user text`
        }
    }
    changeTitle=(event)=>{
        // console.log(event.target.value);
        this.setState({userText:event.target.value?event.target.value:"i'm user text"})
    }
    render(){
        return (
            <div>
                <h2>{this.state.title}</h2>
                <input onChange={this.changeTitle}/>
                <h4>{this.state.userText}</h4>
                <hr/>
            </div>
        )
    }
}

export default Header;