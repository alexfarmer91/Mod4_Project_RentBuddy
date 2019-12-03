import React from 'react';
import BuildingsTable from '../components/BuildingsTable.js'
// import NewBuilding from '../components/NewBuilding.js'
// import NewTenant from '../components/NewTenant.js'
import EditLLProfile from '../components/EditLLProfile.js'
import BuildingShow from './BuildingShow.js'
import NavBar from './NavBar.js';

export default class LandlordDashboard extends React.Component {
 state = {
     landlordData: {},
     myBuildings: [],
     myTenants: [],
     showBuilding: null,
     menuType: "dashboard"
 }

 componentDidMount(){
     fetch(`http://localhost:3000/landlords/${this.props.userId}`)
     .then(r => r.json())
     .then(ll => {
         this.setState({
             landlordData: ll
         })
     })

     fetch("http://localhost:3000/buildings")
     .then(r => r.json())
     .then(buildings => {
        this.setState({
            myBuildings: buildings.filter(building => building.landlord_id === this.props.userId)
        })
     })

     fetch("http://localhost:3000/tenants")
     .then(r => r.json())
     .then(tenants => {
        this.setState({
            myTenants: tenants.filter(tenant => tenant.landlord_id === this.props.userId)
        })
     })
 }

 precise = (x) => {
    return Number.parseFloat(x).toPrecision(2);
  }

  clickBuilding = (event) => {
   this.setState({
       showBuilding: this.state.myBuildings.find(building => building.address === event.target.innerText)
   })
  }

  changeNav = (event) => {
   console.log(event.target.value)
   this.setState({
    menuType: event.target.value
   })
  }

  renderMenu = () => {
      switch (this.state.menuType){
          case "dashboard":
              return (<React.Fragment>
              <BuildingsTable clickBuilding={this.clickBuilding} precise={this.precise} myBuildings={this.state.myBuildings} />
              {this.state.showBuilding ? <BuildingShow 
              address={this.state.showBuilding.address} 
              vacancyRate={this.precise(this.state.showBuilding.tenants.length / this.state.showBuilding.units)} 
              tenants={this.state.showBuilding.tenants} /> : null}
              </React.Fragment>);
        //    case "add-building":
        //        return <NewBuilding />;
        //    case 'add-tenant':
        //         return <NewTenant />;
            case "edit-profile":
                return <EditLLProfile landlordData={this.state.landlordData}/>;
            default:
                return (<React.Fragment>
                        <BuildingsTable clickBuilding={this.clickBuilding} precise={this.precise} myBuildings={this.state.myBuildings} />
                        {this.state.showBuilding ? <BuildingShow 
                        address={this.state.showBuilding.address} 
                        vacancyRate={this.precise(this.state.showBuilding.tenants.length / this.state.showBuilding.units)} 
                        tenants={this.state.showBuilding.tenants} /> : null}
                        </React.Fragment>);

      }
  }

 render(){
     return(
         <div className="dashboard">
             <NavBar changeNav={this.changeNav} />
             {this.renderMenu}
             
             <BuildingsTable clickBuilding={this.clickBuilding} precise={this.precise} myBuildings={this.state.myBuildings} />
             {this.state.showBuilding ? <BuildingShow 
             address={this.state.showBuilding.address} 
             vacancyRate={this.precise(this.state.showBuilding.tenants.length / this.state.showBuilding.units)} 
             tenants={this.state.showBuilding.tenants} /> : null}
         </div>
     )
 }
}