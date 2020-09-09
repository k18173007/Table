import React from 'react'
import { Link } from 'react-router-dom'

export const BtnGroup = () => {
  return (
    <div className="d-flex justify-content-start">
      <Link
        to="/requests/requesttable"
        className="bg-secondary text-center text-light mr-1 btn-sm"
        style={{ width: '10%', borderRadius: '0' }}
      >
        Request
      </Link>
      <Link
        to="/requests/granttable"
        className="bg-secondary text-center text-light mr-1 btn-sm"
        style={{ width: '10%', borderRadius: '0' }}
      >
        Geanted
      </Link>
      <Link
        to="/requests/savetable"
        className="bg-secondary text-center text-light mr-1 btn-sm"
        style={{ width: '10%', borderRadius: '0' }}
      >
        Save
      </Link>
      <Link
        to="/requests/rejecttable"
        className="bg-secondary text-center text-light mr-1 btn-sm"
        style={{ width: '10%', borderRadius: '0' }}
      >
        Reject
      </Link>
    </div>
  )
}

export const DriverDetailsBtnGroup = () => {
  return (
    <div className="d-flex justify-content-start">
      <Link
        to="/driverdetails/driver"
        className="bg-secondary text-center text-light mr-1 btn-sm"
        style={{ width: '10%', borderRadius: '0' }}
      >
        Granted
      </Link>
      <Link
        to="/driverdetails/aboutdriver" style={{width: "16%"}}
        className="bg-secondary text-center text-light mr-1 btn-sm"
        style={{ width: '16%', borderRadius: '0' }}
      >
        About Driver 
      </Link>     
    </div>
  )
}
