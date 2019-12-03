import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {

    return (<div>
    <p>Welcome to RentBuddy!</p>
    <p>I am a:</p>
      <div id="select-user">
       <Link to="/landlord">Landlord</Link> 
       <Link to="/tenant">Tenant</Link>
       </div>
    </div>)

}

export default Home;