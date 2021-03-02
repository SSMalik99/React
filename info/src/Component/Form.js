import React, {Component} from "react"

class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName:"",
            lastName:"",
            age:"",
            gender:"",
            isFriendly:true,
            travelingLocation:"",
            restriction:{
                vegetable:"",
                lactose:"",
                kosher:""
            }
        }
        this.dataHandler=this.dataHandler.bind(this);
        this.submitHandler=this.submitHandler.bind(this);
    }
    submitHandler(){}
    dataHandler(event){
        let myEvent = event.target;
        let value=myEvent.type === "checkbox" ? myEvent.checked : myEvent.value;
        let name = myEvent.name;
        this.setState({
            [name]:value
            })
        }
    
    render() {
        return (
            <main>
                <form onSubmit={this.submitHandler}>
                    <input 
                    placeholder="First Name"
                    name="firstName" 
                    value={this.state.firstName}
                    onChange={this.dataHandler}
                    /><br />
                    <input 
                    placeholder="First Name"
                    name="lastName" 
                    value={this.state.lastName}
                    onChange={this.dataHandler}
                    /><br />
                    <input 
                    placeholder="age"
                    name="age" 
                    value={this.state.age}
                    onChange={this.dataHandler}
                    /><br />                    
                    
                    <input type="radio" onChange={this.dataHandler} name="gender" value="Male"  /><label>Male</label>
                    <input type="radio" onChange={this.dataHandler} name="gender" value="Female"/>
                    <label>Female</label>
                    <input type="radio" onChange={this.dataHandler} name="gender" value="Other"/>
                    <label>Other</label>
                    <br />
                    
                    <label>Find Your traveling location</label>
                    <select name="travelingLocation" onChange={this.dataHandler}>
                        <option>---Select City---</option>
                        <option value="Paris">Paris</option>
                        <option value="London">London</option>
                        <option value="Sydney">Sydney</option>
                    </select>
                    <br />
                    
                    
                    <input onChange={this.dataHandler} type="checkbox" name="restriction.vagetable" value="Vegetable" checked={this.state.restriction.isVegetable} /><label>Vegetable</label>
                    <input onChange={this.dataHandler} type="checkbox" checked={this.state.restriction.isKosher} name="restriction.kosher" value="Kosher"/><label>Kosher</label>
                    <input onChange={this.dataHandler} checked={this.state.restriction.isLactose} type="checkbox" name="restriction.lactose" value="Lactose"/><label>Lactose</label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.travelingLocation}</p>
                <p>
                    Your dietary restrictions: {this.state.restriction.kosher},{this.state.restriction.vegetable},{this.state.restriction.lactose}
                </p>
            </main>
        )
    }
}

export default Form;
