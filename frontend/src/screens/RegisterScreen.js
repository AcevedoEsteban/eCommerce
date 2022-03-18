
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'


// eslint-disable-next-line react/prop-types
const RegisterScreen = ({ location, history }) => {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [message, setMessage] = useState('')

const dispatch = useDispatch()

const userRegister = useSelector((state) => state.userRegister)
const { loading, error ,userInfo } = userRegister

// eslint-disable-next-line react/prop-types
const redirect= location.search ? location.search.split('=')[1] : '/'

useEffect(() => {
    if(userInfo) {
        // eslint-disable-next-line react/prop-types
        history.push(redirect)
    }
}, [history, userInfo, redirect])

const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
    setMessage('passwords do not match ')
    }else {

        dispatch(register(name, email, password))
    }
}

  return (
    <FormContainer>
          <h1>Sign Up</h1>
          {message && <Message variant='danger'>{message}</Message>}
          {error && <Message variant='danger'>{error} </Message>}
          {loading && <Loader/>}
      <Form onSubmit={submitHandler}>
      <Form.Group controlId='email'>
          
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='name' 
                  placeholder='enter name' value={name}
                  onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
              </Form.Group>


              <Form.Group controlId='email'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type='email' 
                  placeholder='enter email' value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
              </Form.Group>

              <Form.Group controlId='password'>
                  <Form.Label>Password </Form.Label>
                  <Form.Control type='password' 
                  placeholder='enter password' value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  ></Form.Control>
              </Form.Group>

              <Form.Group controlId='confirmPassword'>
                  <Form.Label>Confirm Password </Form.Label>
                  <Form.Control type='password' 
                  placeholder='confirm password' value={password}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  ></Form.Control>
              </Form.Group>

              <Button type='submit' variant='primary'>
                  Register
                  </Button>
          </Form>
          <Row className='py-3'>
              <Col>
               have account?
                <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}> login</Link> 
              </Col>
               </Row>
                  </FormContainer>
  )
}

export default RegisterScreen