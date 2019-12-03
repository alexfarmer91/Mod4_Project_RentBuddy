import React from 'react';

export default class LandlordLogin extends React.Component {

    state = {
        username: "",
        password: ""
    }

    usernameChange = (event) => {
     this.setState({
         username: event.target.value
     })
    }

    passwordChange = (event) => {
        this.setState({
            password: event.target.value
        })
       }

    handleSubmit = (event) => {
        event.preventDefault()

     fetch('http://localhost:3000/landlords')
     .then(r => r.json())
     .then(landlords => {
         let landlord = landlords.find(ll => ll.username === this.state.username)
        this.props.setUserId(landlord.id)
        this.props.startSession()
     })
     .catch(() => console.log('error'))
    }

    render(){
        return(<form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.usernameChange} placeholder="Username" name="username" value={this.state.username} required />
            <input type="password" onChange={this.passwordChange} placeholder="Password" name="password" value={this.state.password} required />
            <button onClick={this.props.back}>Back</button>
            <input type="submit" value="Submit"/>
        </form>)

    }

}