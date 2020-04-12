import React from 'react'
import { Link } from 'react-router-dom'

import Users from '../../data/users'

const View = () => {
  return (
    <>
    <div className="sections">
      <h2>Names</h2>
      <ul>
        {Users.usersArr.map(item => {
          return <Link to={`/data/${item.id}`}>
            <li>{item.name}</li>
          </Link>
        })}
      </ul>
    </div>
    </>
  )
}

export default View
