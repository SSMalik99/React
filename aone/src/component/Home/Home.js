import React,{Component} from 'react';
import JSON from './news';
import NewsDisplay from './newsDisplay'

class Home extends Component{
    constructor(){
        super()
        this.state={
            news:JSON
        }
    }
    render(){
        return(
            <div>
                <NewsDisplay newsDisplay={this.state.news}></NewsDisplay>
            </div>
        )
    }
}

export default Home;