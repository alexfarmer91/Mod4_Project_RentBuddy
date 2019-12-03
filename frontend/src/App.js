import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { LandlordForm, TenantForm } from './components';
import SwitchContainer from './containers/SwitchContainer.js'
import LandlordDashboard from './containers/LandlordDashboard'
import TenantDashboard from './containers/TenantDashboard.js'
import { Link } from 'react-router-dom'

export default class App extends React.Component {
  state = {
    userType: null,
    formType: null,
    loggedIn: false,
    userId: null
  }
  changeToTenant = () => {
    this.setState({
      userType: "tenant"
    })
  }
  changeToLandlord = () => {
    this.setState({
      userType: "landlord"
    })
  }

  clickLoginButton = () => {
    this.setState({
        formType: "login"
    })
}

clickSignupButton = () => {
    this.setState({
        formType: "signup"
    })
}
formBackButton = () => {
  this.setState({
    formType: null
  })
}

setUserId = (id) => {
  this.setState({
    userId: id
  })
}

startSession = () => {
  this.setState({
    loggedIn: true
  })
}

renderDashboard = () => {
  if (this.state.userType === "landlord"){
    return <LandlordDashboard userId={this.state.userId} />
  } else if (this.state.userType === "landlord") {
    return <TenantDashboard userId={this.state.userId} />
  } else {
    return 1
  }

}
  render() {
  return (
    <div className="App">
      <header className="App-header">
      {this.state.loggedIn
      ? 
      <div><LandlordDashboard userId={this.state.userId} /></div>
      :
       <div>
        <aside>
          <Link to="/">Home</Link>
        </aside>
        <img src={logo} className="App-logo" alt="logo" />
        <SwitchContainer startSession={this.startSession} setUserId={this.setUserId} userId={this.state.userId} formBackButton={this.formBackButton} formType={this.state.formType} userType={this.state.userType} changeToTenant={this.changeToTenant} changeToLandlord={this.changeToLandlord} formBackButton={this.formBackButton} clickSignupButton={this.clickSignupButton} clickLoginButton={this.clickLoginButton}/>
        </div>
      }
      </header>
    </div>
  );
  }
}
