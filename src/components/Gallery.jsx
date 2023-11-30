/* eslint-disable no-unused-vars */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Beasts from './Beasts.jsx';
import items from './data.json';
import { useState } from 'react';
import CardModal from './CardModal.jsx';

function Gallery() {
    const [showCardModal, setShowCardModal] = useState(false);

    function cardModalHandler() {
        setShowCardModal(true);
    }

    function closeCardModalHandler() {
        setShowCardModal(false);
    }

    return (
        <>
            <Container>
                <Row xs={1} md={4} styles={{ width: 'auto' }}>
                    <Col>
                        {items.map((item, index) => {
                           return <>
                                <Beasts
                                    key={index}
                                    title={item.title}
                                    imageURL={item.image_url}
                                    description={item.description}
                                    keyword={item.keyword}
                                    horns={item.horns}
                                    beastFavNum={0}
                                />
                                <CardModal
                                    imageURL={item.image_url}
                                    title={item.title}
                                    description={item.description}
                                    show={showCardModal} onClose={closeCardModalHandler} />
                            </>
                        }
                        )
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Gallery