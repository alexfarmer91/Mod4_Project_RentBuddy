import React from 'react';
import { Route, Switch } from 'react-router-dom'

const NavBar = (props) => {
return(<div class="topnav">
      <form>
         <label for="dashboard-button">Dashboard</label>
          <input onChange={props.changeNav} type='radio' name='nav' id="dashboard-button" value='dashboard' defaultChecked />
          <label for="building-add">Add Building</label>
          <input onChange={props.changeNav} type='radio' name='nav' id="building-add" value='add-building' />
          <label for="tenant-add">Add Tenant</label>
          <input onChange={props.changeNav} type='radio' name='nav' id="tenant-add" value='add-tenant' />
          <label for="edit-button">Edit Profile</label>
          <input onChange={props.changeNav} type='radio' name='nav' id="edit-button" value='edit-profile' /> 
      </form>
    </div>)
}

export default NavBar;