import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ColorProperty } from './Components/ColorProperty'
import { LableSelectors } from './Components/LableSelectors'
import { ClassSelectors } from './Components/ClassSelectors'
import { Buttons } from './Components/Buttons'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    
    <ColorProperty/>
    
    <LableSelectors/>
    
    <ClassSelectors/>
    
    <Buttons/>
    
  </React.StrictMode>,
)
