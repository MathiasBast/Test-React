import React from 'react'
import { Route } from 'react-router-dom'

import View from './View'
import Data from './Data'
import Friends from './Friends'

const App = () => {
  return (
    <>
     <h1>React development has begun!</h1>
     <div className="container">
     <Route path="/" component={View} />
     <Route path='/data/:id' component={Data} />
     <Route exact path='/data/:id/:what' component={Friends} />
     </div>
     </>
  )
}

export default App
