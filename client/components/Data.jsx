import React from 'react'

import Data from '../../data/users'
import { Link } from 'react-router-dom'

const ViewData = prop => {
  const id = prop.match.params.id
  const idx = id - 1
  return (
    <>
    <div className="sections">
      <Link to="/">Back</Link>
      <h2>Quality</h2>
      <Link to={`/data/${id}/${Data.usersArr[idx].what}`}>
        <h3>{Data.usersArr[idx].what}</h3>
      </Link>
    </div>
    </>
  )
}

export default ViewData
