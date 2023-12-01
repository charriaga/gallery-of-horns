/* eslint-disable react/prop-types */
import React from 'react';
import Card from 'react-bootstrap/Card'
import CardModal from './CardModal';
import '../App.css'
import { useState } from 'react';


function Beasts(props) {
    let [favCount, setFavCount] = useState(0)
    let beastFavNum = 0
    function counter() {
        setFavCount(favCount => beastFavNum = favCount + 1);
        return beastFavNum;
    }

    const [showCardModal, setShowCardModal] = useState(false);

    function cardModalHandler() {
        setShowCardModal(true);
    }

    function closeCardModalHandler() {
        setShowCardModal(false);
    }


    return (
        <>
            <Card>
                <Card.Title className='cardTitle'>{props.title}</Card.Title>
                <Card.Img
                    src={props.imageURL}
                    alt={props.title}
                    className='cardImg'
                    onClick={cardModalHandler}
                ></Card.Img>
                <Card.Text className='cardHeart' onClick={counter}>&#9829; {favCount}</Card.Text>
                <Card.Text className='cardDescription'>{props.description}</Card.Text>
            </Card>

            <CardModal
                imageURL={props.imageURL}
                title={props.title}
                description={props.description}
                show={showCardModal} onClose={closeCardModalHandler} />
        </>
    );
}

export default Beasts