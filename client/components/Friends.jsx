import React from 'react'

import Data from '../../data/users'
import { Link } from 'react-router-dom'

const Friends = prop => {
  const id = prop.match.params.id
  const idx = id - 1
  const friendsArr = Data.usersArr[idx].friends
  const Newfrieds = []
  Data.usersArr.map((item, y) => {
    for (var i = 0; i < friendsArr.length; i++) {
      if (Data.usersArr[y].id === friendsArr[i]) {
        Newfrieds.push(Data.usersArr[y].name)
      }
    }
  })
  return (
    <>
    <div className="sections">
      <Link to={`../../data/${id}`}>Back</Link>
      <h2>Friends</h2>
      <ul>
        {Newfrieds.map(item => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
    </>
  )
}

export default Friends

// if(friendsArr[i] = item.id){
//   return Newfrieds.push(item.name)
// }
