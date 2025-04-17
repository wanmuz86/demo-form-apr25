import { useState } from 'react'
import './App.css'
import ControlledForm from './components/ControlledForm'
import MultipleForm from './components/MultipleForm'
import UncontrolledForm from './components/UncontrolledForm'
import ReactHookForm from './components/ReactHookForm'

function App() {


  return (
    <>
     <ControlledForm/>
     <hr/>
     <MultipleForm/>
     <hr />
     <UncontrolledForm/>
     <hr />
     <ReactHookForm/>
    </>
  )
}

export default App
