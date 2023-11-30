/* eslint-disable react/prop-types */
import React from 'react';
import Card from 'react-bootstrap/Card'
import { useState } from 'react';


function Beasts(props) {
    let [favCount, setFavCount] = useState(0)
    let beastFavNum = 0
    function counter () {
        setFavCount (favCount => beastFavNum = favCount + 1);
        return beastFavNum;
    }

    return (
        <Card style={{width: '80%'}}>
            <Card.Title>{props.title}</Card.Title>
            <Card.Img src={props.imageURL} alt={props.title}></Card.Img>
            <Card.Text id='Heart' onClick={counter}>&#9829; {favCount}</Card.Text>
            <Card.Text>{props.description}</Card.Text>
        </Card>

    );
}

export default Beasts