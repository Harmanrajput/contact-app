import React from "react";

class AddContact extends React.Component{
    state ={
        name:"",
        email:"",
    }
    add =(e) =>{
        e.preventDefault();
        if(this.state.name=== "" || this.state.email === ""){
            alert("all the fields ae mandetory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""})
    }
    render(){
        return(
<div className="ui main">
<h2>Add contact</h2>
<form className="ui form" onSubmit={this.add}>
    <div className="field">
        <label>Name</label>
        <input type="text" name="name" placeholder="Your name"  
        value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})}/>
    </div>

    <div className="field">
        <label>Email</label>
        <input type="email" name="email" placeholder="Your email"
           value={this.state.email} onChange={(e)=> this.setState({email:e.target.value})}/>
    </div>

<button className="ui button blue">Add</button>
</form>
</div>
        )
    }
}
export default AddContact;