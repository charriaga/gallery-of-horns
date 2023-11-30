/* eslint-disable no-unused-vars */
import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Beasts from './Beasts.jsx'
import items from './data.json'



function Gallery() {
    console.log(items)
    return (
        <>
            <Container>
                <Row xs={1} md={4} styles={{ width: 'auto'}}>
                    <Col>
                        {items.map((item, index) => {

                            return <Beasts
                                key={index}
                                title={item.title}
                                imageURL={item.image_url}
                                description={item.description}
                                keyword={item.keyword}
                                horns={item.horns}
                                beastFavNum={0}
                            />
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