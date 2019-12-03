import React from 'react';
import LandlordForm from '../components/LandlordForm.js';
import TenantForm from '../components/TenantForm.js';
import Home from '../Home'
import { Route, Switch } from 'react-router-dom'

const SwitchContainer = (props) => {
    return(
      <Switch>
        <Route path="/tenant" render={ () => <TenantForm startSession={props.startSession} setUserId={props.setUserId} userId={props.userId} back={props.formBackButton} formType={props.formType} changeToTenant={props.changeToTenant} clickSignupButton={props.clickSignupButton} clickLoginButton={props.clickLoginButton} />} />
        <Route path="/landlord" render={ () => <LandlordForm startSession={props.startSession} setUserId={props.setUserId} userId={props.userId} back={props.formBackButton} formType={props.formType} changeToLandlord={props.changeToLandlord} clickSignupButton={props.clickSignupButton} clickLoginButton={props.clickLoginButton} /> } />
        <Route exact path="/" component={ Home } />    
      </Switch> 
    )
}

export default SwitchContainer;