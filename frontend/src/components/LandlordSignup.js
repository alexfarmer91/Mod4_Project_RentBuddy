import React from 'react';

export default class LandlordSignup extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("submit ll signup")
       }
   
       render(){
           return(<form onSubmit={this.handleSubmit}>
               <input type="text" placeholder="Username" name="username" required />
               <input type="text" placeholder="Email" name="email" required />
               <input type="password" placeholder="Password" name="password" required />
               <button onClick={this.props.back}>Back</button>
               <input type="submit" value="Submit"/>
           </form>)
   
       }
}