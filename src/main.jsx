import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Title from './Title.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Title/>
  </StrictMode>,
)
