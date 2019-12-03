import React from 'react';

const BuildingShow = (props) => {
    return(
        <div className="property-show">
         <h3>Address: {props.address}</h3>
         <h4>Vacancy Rate: {props.vacancyRate * 100}%</h4>
         <div className="tenant-info-container">
             <h3>Current Tenants:</h3>
         {props.tenants.map(tenant => {
             return (<div key={tenant.id} className="tenant-info">
              <h5>Name: {tenant.name}</h5>
                  <p>Email: {tenant.email}</p>
                  <p>Unit #: {tenant.unit}</p>
             </div>)
         })}
         </div>
        </div>
    )

}

export default BuildingShow;