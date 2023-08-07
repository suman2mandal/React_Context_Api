import React from 'react'
import {LoginContext} from '../context/LoginContext'
import {useContext} from 'react'

function Confirmation() {
  const {login} = useContext(LoginContext);
  return (
    <div>{login}</div>
  )
}

export default Confirmation