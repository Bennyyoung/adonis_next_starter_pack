import {Jumbotron, Card} from 'react-bootstrap';


const Body = () => (
    <div>
        <Jumbotron>
           <Card bg="primary" text="white" style={{ width: '18rem', float: 'left', marginRight: '10%'}}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>

            <Card bg="secondary" text="white" style={{ width: '18rem', float: 'left', marginRight: '10%'}}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Secondary Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>

            <Card bg="success" text="white" style={{ width: '18rem' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Success Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>

            <Card bg="success" text="white" style={{ width: '18rem', marginTop: '5%' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Success Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
        </Jumbotron>
    </div>
)

export default Body