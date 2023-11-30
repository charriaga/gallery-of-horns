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
        <Card>
            <Card.Title className='cardTitle'>{props.title}</Card.Title>
            <Card.Img src={props.imageURL} alt={props.title} className='cardImg'></Card.Img>
            <Card.Text className='cardHeart' onClick={counter}>&#9829; {favCount}</Card.Text>
            <Card.Text className='cardDescription'>{props.description}</Card.Text>
        </Card>

    );
}

export default Beasts