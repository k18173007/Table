import React from 'react'
import { Save, Granted, Rejected } from './ContactDetails'

const SaveData = (props) => {
  Save.push(props)

  let data = Save.map((props) => {
    return (
      <tr key={props.id}>
        <td>{props.id}</td>
        <td>{props.ReqTime}</td>
        <td>{props.Time}</td>
        <td>{props.DriverName}</td>
        <td>{props.HospitalName}</td>
        <td>{props.PatientName}</td>
        <td>{props.PatientCase}</td>
        <td>{props.level}</td>
      </tr>
    )
  })
  return data
}

const GrantedData = (props) => {
  Granted.push(props)

  let data = Granted.map((props) => {
    return (
      <tr key={props.id}>
        <td>{props.id}</td>
        <td>{props.ReqTime}</td>
        <td>{props.Time}</td>
        <td>{props.DriverName}</td>
        <td>{props.HospitalName}</td>
        <td>{props.PatientName}</td>
        <td>{props.PatientCase}</td>
        <td>{props.level}</td>
      </tr>
    )
  })
  return data
}

const RejectedData = (props) => {
  Rejected.push(props)

  let data = Rejected.map((props) => {
    return (
      <tr key={props.id}>
        <td>{props.id}</td>
        <td>{props.ReqTime}</td>
        <td>{props.Time}</td>
        <td>{props.DriverName}</td>
        <td>{props.HospitalName}</td>
        <td>{props.PatientName}</td>
        <td>{props.PatientCase}</td>
        <td>{props.level}</td>
      </tr>
    )
  })
  return data
}

const RenderRequestBody = (contact) => {
  return (
    <tr key={contact.contact.id}>
      <td value={contact.contact.id}>{contact.contact.id}</td>
      <td>{contact.contact.ReqTime}</td>
      <td>{contact.contact.Time}</td>
      <td>{contact.contact.DriverName}</td>
      <td>{contact.contact.HospitalName}</td>
      <td>{contact.contact.PatientName}</td>
      <td>{contact.contact.PatientCase}</td>
      <td>{contact.contact.level}</td>
      <td>
        <div className="bs-example">
          <div
            className="btn-group btn-sm btn-group-toggle"
            data-toggle="buttons"
          >
            <label className="btn btn-sm btn-warning">
              <input type="radio" name={contact.id} autocomplete="off" />A
            </label>
            <label className="btn btn-sm btn-danger active">
              <input
                type="radio"
                name={contact.id}
                autocomplete="off"
                checked
              />
              B
            </label>
            <label className="btn btn-sm btn-info">
              <input type="radio" name={contact.id} autocomplete="off" />C
            </label>
          </div>
        </div>
      </td>
      <td className="opration">
        <button
          style={{ borderRadius: '0' }}
          className="btn btn-success btn-sm"
          onClick={() => SaveData(contact.contact)}
        >
          {' '}
          Save
        </button>
      </td>
      <td className="opration">
        <button
          style={{ borderRadius: '0' }}
          className="btn btn-primary btn-sm"
          onClick={() => GrantedData(contact.contact)}
        >
          Grand
        </button>
      </td>
      <td className="opration">
        <button
          style={{ borderRadius: '0' }}
          className="btn btn-danger btn-sm"
          onClick={() => RejectedData(contact.contact)}
        >
          Reject
        </button>
      </td>
    </tr>
  )
}

export const Table = (props) => {
  const table = props.request.map((con) => {
    // console.log("table",con);
    return <RenderRequestBody contact={con} />
  })

  return (
    <>
      <table style={{ height: '40vh' }} className="table table-striped">
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
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </>
  )
}

export const RejectTable = (props) => {
  return (
    <>
      <table style={{ height: '40vh' }} className="table table-striped">
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
          </tr>
        </thead>
        <tbody>
          <RejectedData />
        </tbody>
      </table>
    </>
  )
}

export const SaveTable = () => {
  return (
    <>
      <table style={{ height: '40vh' }} className="table table-striped">
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
          </tr>
        </thead>
        <tbody>
          <SaveData />
        </tbody>
      </table>
    </>
  )
}

export const GrantedTable = (props) => {
  return (
    <>
      <table style={{ height: '40vh' }} className="table table-striped">
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
          </tr>
        </thead>
        <tbody>
          <GrantedData />
        </tbody>
      </table>
    </>
  )
}
