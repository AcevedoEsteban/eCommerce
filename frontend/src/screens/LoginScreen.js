import React, {userState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

const LoginScreen = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

  return (
    <FormContainer>
<h1>Sign In</h1>
    </FormContainer>
  )
}

export default LoginScreen