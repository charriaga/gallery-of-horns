/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Beasts from './Beasts'
import items from './data.json'

function Gallery(props) {


    return (
        <>
            <Container>
                <Row xs={1} md={4}>
                    <Col>
                        {props.itemRender.map((item, index) => {
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