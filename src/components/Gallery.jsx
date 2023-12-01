/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Beasts from './Beasts.jsx';
import items from './data.json'

function Gallery(props) {

    return (
        <>
            <Container>
                <Row xs={1} md={4} styles={{ width: 'auto' }}>
                    <Col>
                        {items.map((prop, index) => {
                            return <>
                                <Beasts
                                    key={index}
                                    title={prop.title}
                                    imageURL={prop.image_url}
                                    description={prop.description}
                                    keyword={prop.keyword}
                                    horns={prop.horns}
                                    beastFavNum={0}
                                />
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