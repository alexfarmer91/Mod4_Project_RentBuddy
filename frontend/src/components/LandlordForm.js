import React from 'react';
import LoginSelect from "./LoginSelect.js"
import LandlordLogin from "./LandlordLogin.js"
import LandlordSignup from "./LandlordSignup.js"

export default class LandlordForm extends React.Component {

    componentDidMount(){
        this.props.changeToLandlord()
    }

    render(){
        switch(this.props.formType) {
            case "signup":
             return <LandlordSignup startSession={this.props.startSession} setUserId={this.props.setUserId} back={this.props.back} />
            case "login":
              return <LandlordLogin startSession={this.props.startSession} setUserId={this.props.setUserId} back={this.props.back} />
            default:
              return <LoginSelect back={this.props.back} signup={this.props.clickSignupButton} login={this.props.clickLoginButton}/>
          }
    }
}