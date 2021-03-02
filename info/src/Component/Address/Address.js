import React,{Component} from 'react';

class Address extends Component{
    constructor(){
        super()
        this.state={
            Address:[]
        }
    }
    render(){
        return(
            <React.Fragment>
                <h3>I'm from Address Component...</h3>
            </React.Fragment>
        )
    }
}

export default Address;