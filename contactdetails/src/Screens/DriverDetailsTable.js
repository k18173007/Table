import React from 'react'
import { Request } from "./ContactDetails";


const arr=[]
export const DriverDetails = (driver,hospital) => {
    
  let items = {
    "driver": driver,
    "hospital": hospital,
  }

  arr.push(items)
  const table=arr.map((props)=>{
    console.log(props);
    
      
    return (
      <div>
        <div className="details d-flex flex-column align-items-start">
          <h4 className="text-info">Driver Details</h4>
          <h5>{props.driver.Drivername}</h5>
          <p>{props.hospital.hospitalAddress}</p>
          <div className="container p-0 d-flex">
            <div className="hospital-details col-4 p-0 text-start col-md-4 col-sm">
              <p className="text-bold">Address :</p>
              <p className="text-bold">Contact :</p>
            </div>
            <div className="hospital-details col-8 text-start col-md-8 col-sm" >
              <p>{props.driver.driverContact}</p>
              <p>{props.hospital.hospitalAddress}</p>
            </div>
          </div>
        </div>
      </div>
    )

  })
  return table
}





const RenderRequestBody = (props) => {
  return (
    <tr key={props.patient.id} role="button">
      <td>{props.patient.id}</td>
      <td>{props.patient.time}</td>
      <td>{props.patient.requestTime}</td>
      <td>{props.driver.DriverName}</td>
      <td>{props.hospital.hospitalName}</td>
      <td>{props.patient.patientName}</td>
      <td>{props.patient.case}</td>
      <td>{props.patient.plevel}</td>
      <td className="opration">
        <button
          style={{ borderRadius: '0' }}
            onClick={()=>DriverDetails(props.driver,props.hospital)}
          className="btn btn-grant">
          {' '}
          Grant
        </button>
      </td>
    </tr>
  )
}

export const DriverDetailsTable = (props) => {
  console.log("table driver", props);
  const table = props.patients.map((pat) => {
    const drive = props.drivers.map((drive) => {
      const hospital = props.hospitals.map((hos) => {
        if ((pat.driverId === drive.id) && (drive.hospitalId === hos.id)) {
          return <RenderRequestBody patient={pat} driver={drive} hospital={hos} />
        }
      })
      return hospital
    })
    return drive
  })

  return (
    <div className="table-scroll">
      <table className="table table-striped">
        <thead style={{ background: '#12565d', color: 'aliceblue' }}>
          <tr>
            <th>id</th>
            <th>Request</th>
            <th>Time</th>
            <th>Drivername</th>
            <th>hospitalName</th>
            <th>patientName</th>
            <th>patientCase</th>
            <th>level</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </div>
  )
}


const RenderGrantedBody = (props) => {

  return (
    <tr key={props.driver.id}>
      <td>{props.driver.DriverName}</td>
      <td style={{ textAlign: "end" }}>{props.hospital.hospitalName}</td>
    </tr>
  )
}


export const GrantedTable = (props) => {
  const table = props.patients.map((pat) => {
    const drive = props.drivers.map((drive) => {
      const hospital = props.hospitals.map((hos) => {
        if ((pat.driverId === drive.id) && (drive.hospitalId === hos.id)) {
          return <RenderGrantedBody patient={pat} driver={drive} hospital={hos} />
        }
      })
      return hospital
    })
    return drive
  })
  return (
    <div id="d-name-h-name">
      <table className="table table-striped">
        <thead style={{ background: '#fff', color: '#12565d' }}>
          <tr>
            <th>Drivername</th>
            <th style={{ textAlign: "end" }}>hospitalName</th>
          </tr>
        </thead>
        <tbody>
          {table}
        </tbody>
      </table>
    </div>
  )
}
