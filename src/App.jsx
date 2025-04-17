import { useState } from 'react'
import './App.css'
import ControlledForm from './components/ControlledForm'
import MultipleForm from './components/MultipleForm'
import UncontrolledForm from './components/UncontrolledForm'

function App() {


  return (
    <>
     <ControlledForm/>
     <hr/>
     <MultipleForm/>
     <hr />
     <UncontrolledForm/>
    </>
  )
}

export default App
