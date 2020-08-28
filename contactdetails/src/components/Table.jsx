import React, { useState, useEffect } from 'react'
import axios from 'axios'

const URL = '  http://localhost:3001/Contact'

const Table = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await axios.get(URL)
    setData(response.data)
  }

  const removeData = (id) => {
    axios.delete(`${URL}/${id}`).then((res) => {
      const del = data.filter((employee) => id !== employee.id)
      setData(del)
    })
  }

  const saveTable = (
    id,
    ReqTime,
    Time,
    DriverName,
    HospitalName,
    PatientName,
    PatientCase,
    level,
  ) => {
    console.log(
      ReqTime,
      Time,
      DriverName,
      HospitalName,
      PatientName,
      PatientCase,
      level,
    )

    const Export = {
      ReqTime: ReqTime,
      Time: Time,
      HospitalName: HospitalName,
      PatientName: PatientName,
      PatientCase: PatientCase,
      DriverName: DriverName,
      level: level,
    }
    Export.date = new Date().toISOString()

    return fetch('http://localhost:3001/' + 'save', {
      method: 'POST',
      body: JSON.stringify(Export),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    })
      .then(
        (response) => {
          if (response.ok) {
            return response
          } else {
            var error = new Error(
              'Error ' + response.status + ': ' + response.statusText,
            )
            error.response = response
            throw error
          }
        },
        (error) => {
          throw error
        },
      )
      .then(removeData(id))
      .catch((error) => {
        console.log('post comments', error.message)
        alert('Your comment could not be posted\nError: ' + error.message)
      })
  }
  const grandTable = (
    id,
    ReqTime,
    Time,
    DriverName,
    HospitalName,
    PatientName,
    PatientCase,
    level,
  ) => {
    console.log(
      ReqTime,
      Time,
      DriverName,
      HospitalName,
      PatientName,
      PatientCase,
      level,
    )

    const Export = {
      ReqTime: ReqTime,
      Time: Time,
      HospitalName: HospitalName,
      PatientName: PatientName,
      PatientCase: PatientCase,
      DriverName: DriverName,
      level: level,
    }
    Export.date = new Date().toISOString()

    return fetch('http://localhost:3001/' + 'granted', {
      method: 'POST',
      body: JSON.stringify(Export),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    })
      .then(
        (response) => {
          if (response.ok) {
            return response
          } else {
            var error = new Error(
              'Error ' + response.status + ': ' + response.statusText,
            )
            error.response = response
            throw error
          }
        },
        (error) => {
          throw error
        },
      )
      .then(removeData(id))
      .catch((error) => {
        console.log('post comments', error.message)
        alert('Your comment could not be posted\nError: ' + error.message)
      })
  }
  const deleteTable = (
    id,
    ReqTime,
    Time,
    DriverName,
    HospitalName,
    PatientName,
    PatientCase,
    level,
  ) => {
    console.log(
      ReqTime,
      Time,
      DriverName,
      HospitalName,
      PatientName,
      PatientCase,
      level,
    )

    const Export = {
      ReqTime: ReqTime,
      Time: Time,
      HospitalName: HospitalName,
      PatientName: PatientName,
      PatientCase: PatientCase,
      DriverName: DriverName,
      level: level,
    }
    Export.date = new Date().toISOString()

    return fetch('http://localhost:3001/' + 'reject', {
      method: 'POST',
      body: JSON.stringify(Export),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    })
      .then(
        (response) => {
          if (response.ok) {
            return response
          } else {
            var error = new Error(
              'Error ' + response.status + ': ' + response.statusText,
            )
            error.response = response
            throw error
          }
        },
        (error) => {
          throw error
        },
      )
      .then(removeData(id))
      .catch((error) => {
        console.log('post comments', error.message)
        alert('Your comment could not be posted\nError: ' + error.message)
      })
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
      '',
      '',
      '',
      '',
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
              <td>
                <div className="bs-example">
                  <div
                    className="btn-group btn-sm btn-group-toggle"
                    data-toggle="buttons"
                  >
                    <label className="btn btn-sm btn-warning">
                      <input type="radio" name={id} autocomplete="off" />A
                    </label>
                    <label className="btn btn-sm btn-danger active">
                      <input
                        type="radio"
                        name={id}
                        autocomplete="off"
                        checked
                      />
                      B
                    </label>
                    <label className="btn btn-sm btn-info">
                      <input type="radio" name={id} autocomplete="off" />C
                    </label>
                  </div>
                </div>
              </td>
              <td className="opration">
                <button
                  style={{ borderRadius: '0' }}
                  className="btn btn-success btn-sm"
                  onClick={() =>
                    saveTable(
                      id,
                      ReqTime,
                      Time,
                      DriverName,
                      HospitalName,
                      PatientName,
                      PatientCase,
                      level,
                    )
                  }
                >
                  Save
                </button>
              </td>
              <td className="opration">
                <button
                  style={{ borderRadius: '0' }}
                  className="btn btn-primary btn-sm"
                  onClick={() =>
                    grandTable(
                      id,
                      ReqTime,
                      Time,
                      DriverName,
                      HospitalName,
                      PatientName,
                      PatientCase,
                      level,
                    )
                  }
                >
                  Grand
                </button>
              </td>
              <td className="opration">
                <button
                  style={{ borderRadius: '0' }}
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    deleteTable(
                      id,
                      ReqTime,
                      Time,
                      DriverName,
                      HospitalName,
                      PatientName,
                      PatientCase,
                      level,
                    )
                  }
                >
                  Reject
                </button>
              </td>
            </tr>
          )
        },
      )
    )
  }

  return (
    <>
      <table style={{ height: '40vh' }} className="table table-striped">
        <thead style={{ background: '#12565d', color: 'aliceblue' }}>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </>
  )
}

export default Table
