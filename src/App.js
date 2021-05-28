import React from 'react'
import { TVAPPProvider } from './lib'
import Home from './views/Home'

const App = () => {
    return (
        <TVAPPProvider config={{ focus: { type: 'border' } }}>
            <Home/>
        </TVAPPProvider>
    )
}

export default App
