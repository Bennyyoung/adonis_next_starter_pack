import React from 'react'
// import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Form, Button } from 'react-bootstrap'; 

const SignUp = () => (
  <div style={{backgroundColor: 'lightgreen', display: 'block', textAlign: 'center', verticalAlign:'middle'}}>
        <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
        />
        {/*React bootstrap link */}
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />

            <Form style={{display: 'inline-block', textAlign: 'left', height: '100vh', margin: '0 auto', marginTop: '275px', top: '-275px' }}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder='Name' required />
                    <Form.Text className="text-muted">
                        Enter Your Full Name
                    </Form.Text>
                </Form.Group>
                
                <Form.Group controlId="formBasicMatricNo">
                    <Form.Label>Matric No</Form.Label>
                    <Form.Control type="text" placeholder='Matric No' required />
                    <Form.Text className="text-muted">
                        Enter Your Matriculation Number  
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicHallNo">
                    <Form.Label>Hall No</Form.Label>
                    <Form.Control type="text" placeholder='Hall No' required />
                    <Form.Text className="text-muted">
                        Enter Your Hall No  
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>

      {/*<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>Sign In
            </Header>
            <Form size='large'>
            <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' required/>
                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Matric No' type='text' required/>
                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Hall No' type='text' required/>


                <Button color='teal' fluid size='large'>
                Login
                </Button>
            </Segment>
            </Form>
            <Message>
            Already have an account? <a href='/login'>Log in</a>
            </Message>
            </Grid.Column>
        </Grid>*/}
  </div>
  
)

export default SignUp