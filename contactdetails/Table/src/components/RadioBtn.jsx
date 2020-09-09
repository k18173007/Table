import React from 'react'
import { Link } from 'react-router-dom'

const BtnGroup = () => {
  return (
    <div className="d-flex justify-content-start">
      <Link
        to="/request"
        className="bg-secondary text-center text-light mr-1 btn-sm"
        style={{ width: '10%', borderRadius: '0' }}
      >
        Request
      </Link>
      <Link
        to="/grant"
        className="bg-secondary text-center text-light mr-1 btn-sm"
        style={{ width: '10%', borderRadius: '0' }}
      >
        Geanted
      </Link>
      <Link
        to="/save"
        className="bg-secondary text-center text-light mr-1 btn-sm"
        style={{ width: '10%', borderRadius: '0' }}
      >
        Save
      </Link>
      <Link
        to="/reject"
        className="bg-secondary text-center text-light mr-1 btn-sm"
        style={{ width: '10%', borderRadius: '0' }}
      >
        Reject
      </Link>
    </div>
  )
}

export default BtnGroup
