import React from 'react'
import { Route } from 'react-router-dom'

import Login from './container/login'
import Register from './container/register'

class App extends React.Component {
    render () {
        return (
            <div>
                <Route path="/" component={Login}></Route>
            </div>
        )
    }
}

export default App
