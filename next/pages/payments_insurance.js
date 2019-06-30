import React from 'react'
import { Form, Button, Container, Checkbox } from 'react-bootstrap'; 


const PaymentsInsuranceTypes = () => (
    <div style={{display: 'block', textAlign: 'center', verticalAlign:'middle'}}>
        <Container>
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
                            <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" name="first-name" required />
                                <Form.Text className="text-muted">
                                    Enter Your Full Name
                                </Form.Text>
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicMatricNo">
                                <Form.Label>Matric No</Form.Label>
                                <Form.Control type="text" placeholder="Card Number" name="number" required />
                                <Form.Text className="text-muted">
                                    Enter Your Card Number  
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicHallNo">
                                <Form.Label>Hall No</Form.Label>
                                <Form.Control type="text" placeholder='Hall No' required />
                                <Form.Text className="text-muted">
                                    Enter Your Hall No  
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicHallNo">
                                <Form.Label>Expiry Date</Form.Label>
                                <Form.Control placeholder="MM / YY" name="expiry" required />
                                <Form.Text className="text-muted">
                                    Enter Your Card Expiry Date
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicHallNo">
                                <Form.Label>CVC</Form.Label>
                                <Form.Control type="text" placeholder="CCV" name="cvc" required />
                                <Form.Text className="text-muted">
                                    Enter Your CVC
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicHallNo">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Email" name="email" autoComplete="on" maxLength="60" required />
                                <Form.Text className="text-muted">
                                    Enter Your Email
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                            Submit
                            </Button>
                    </Form>
                            
        </Container>
                
    </div>
    
)

export default PaymentsInsuranceTypes