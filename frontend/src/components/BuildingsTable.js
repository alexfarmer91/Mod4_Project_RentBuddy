import React from 'react';

const BuildingsTable = (props) => {
    return(<React.Fragment>
        <h4>Click on a building to see more details</h4>
    <table id="my-buildings">
    <thead>
        <tr>
            <th width="50%">Address</th>
            <th width="10%">Units</th>
            <th width="40%">Vacancy Rate</th>
        </tr>
    </thead>
    <tbody>
    {props.myBuildings.map(building => {
        return (
        <tr key={building.id} onClick={(event) => props.clickBuilding(event)}>
             <td>{building.address}</td>
             <td>{building.units}</td>
             <td>{(props.precise(building.tenants.length / building.units)) * 100}%</td>
        </tr>)
    })}
    </tbody>
    </table>
    </React.Fragment>)

}

export default BuildingsTable