import React from 'react';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import './instrument.css';
import Rating from 'react-rating';

const Instrument = (props) => {
    // destructuring
    const{ name,img,rating,price,details}=props.instrument;
    return(
        <div className="instrument">
            <div className="instrument-cards h-100">

            {/* insturment card */}
            <Card  style={{ width: '18rem',border:'1px solid purple'}}>
            <Card.Img variant="top" src={img}  />
            <Card.Body className="card-color">
                <Card.Title ><h4 style={{ fontWeight:'bold' }}>{name}</h4> </Card.Title>
                <Card.Text>{details}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush fw-bold card-color">
            <ListGroupItem className="card-color">Rating: <Rating
                                    initialRating={rating}
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"
                                    />
                                    </ListGroupItem>  

            <ListGroupItem className="card-color">Price: $ {price}</ListGroupItem>     
            </ListGroup>
            <Card.Body className="card-color">
                {/* ====== card button======= */}
            <a href="/service"><Button variant="dark" style={{backgroundColor: "purple"}}> <FontAwesomeIcon icon={faMusic} /> Learn playing {name} </Button>{' '}</a>
            </Card.Body>
            </Card>     
            </div>
        </div>
    )
    
};

export default Instrument;