import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function MovieCard({ title, description, posterURL, rating }) {
return (
    
    <div className="movie-card">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={posterURL} alt={`${title} poster`} />
    <div className="movie-info">
    <Card.Body>
    <Card.Title><h2>{title}</h2></Card.Title>
    <Card.Text>
    <p>{description}</p>
    </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroup.Item><p>Rating: {rating}</p></ListGroup.Item>
    </ListGroup>
    </div>
    </Card>
    </div>
);
}
export default MovieCard;