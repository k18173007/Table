import React, { useState, useEffect } from 'react'
import axios from 'axios'

const URL = '  http://localhost:3001/granted'

const GrantedTable = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await axios.get(URL)
    setData(response.data)
  }
  const renderHeader = () => {
    let headerElement = [
      'id',
      'Request',
      'Time',
      'Drivername',
      'hospitalName',
      'patientName',
      'patientCase',
      'level',
    ]

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }
  const renderBody = () => {
    return (
      data &&
      data.map(
        ({
          id,
          ReqTime,
          Time,
          DriverName,
          HospitalName,
          PatientName,
          PatientCase,
          level,
        }) => {
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{ReqTime}</td>
              <td>{Time}</td>
              <td>{DriverName}</td>
              <td>{HospitalName}</td>
              <td>{PatientName}</td>
              <td>{PatientCase}</td>
              <td>{level}</td>
            </tr>
          )
        },
      )
    )
  }

  return (
    <>
      <table style={{ height: '40vh' }} className="table table-striped">
        <thead style={{ color: 'aliceblue' }} className="bg-primary">
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </>
  )
}

export default GrantedTable
