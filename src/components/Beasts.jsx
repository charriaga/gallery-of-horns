/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Beasts(props) {

    return (
        <Container>
            <Row>
                <Col>
                    <h2>{props[0].title}</h2>
                    <img src={props[0].imageURL} alt={props[0].title} title={props[0].title} />
                    <p>{props[0].description}</p>
                </Col>
                <Col>
                    <h2>{props[1].title}</h2>
                    <img src={props[1].imageURL} alt={props[1].title} title={props[1].title} />
                    <p>{props[1].description}</p>
                </Col>
                <Col>
                    <h2>{props[2].title}</h2>
                    <img src={props[2].imageURL} alt={props[2].title} title={props[2].title} />
                    <p>{props[2].description}</p>
                </Col>
                <Col>
                    <h2>{props[3].title}</h2>
                    <img src={props[3].imageURL} alt={props[3].title} title={props[3].title} />
                    <p>{props[3].description}</p>
                </Col>
                <Col>
                    <h2>{props[4].title}</h2>
                    <img src={props[4].imageURL} alt={props[4].title} title={props[4].title} />
                    <p>{props[4].description}</p>
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <h2>{props[5].title}</h2>
                    <img src={props[5].imageURL} alt={props[5].title} title={props[5].title} />
                    <p>{props[5].description}</p>
                </Col>
                <Col>
                    <h2>{props[6].title}</h2>
                    <img src={props[6].imageURL} alt={props[6].title} title={props[6].title} />
                    <p>{props[6].description}</p>
                </Col>
                <Col>
                    <h2>{props[7].title}</h2>
                    <img src={props[7].imageURL} alt={props[7].title} title={props[7].title} />
                    <p>{props[7].description}</p>
                </Col>
                <Col>
                    <h2>{props[8].title}</h2>
                    <img src={props[8].imageURL} alt={props[8].title} title={props[8].title} />
                    <p>{props[8].description}</p>
                </Col>
                <Col>
                    <h2>{props[9].title}</h2>
                    <img src={props[9].imageURL} alt={props[9].title} title={props[9].title} />
                    <p>{props[9].description}</p>
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <h2>{props[10].title}</h2>
                    <img src={props[10].imageURL} alt={props[10].title} title={props[10].title} />
                    <p>{props[10].description}</p>
                </Col>
                <Col>
                    <h2>{props[11].title}</h2>
                    <img src={props[11].imageURL} alt={props[11].title} title={props[11].title} />
                    <p>{props[11].description}</p>
                </Col>
                <Col>
                    <h2>{props[12].title}</h2>
                    <img src={props[12].imageURL} alt={props[12].title} title={props[12].title} />
                    <p>{props[12].description}</p>
                </Col>
                <Col>
                    <h2>{props[13].title}</h2>
                    <img src={props[13].imageURL} alt={props[13].title} title={props[13].title} />
                    <p>{props[13].description}</p>
                </Col>
                <Col>
                    <h2>{props[14].title}</h2>
                    <img src={props[14].imageURL} alt={props[14].title} title={props[14].title} />
                    <p>{props[14].description}</p>
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <h2>{props[15].title}</h2>
                    <img src={props[15].imageURL} alt={props[15].title} title={props[15].title} />
                    <p>{props[15].description}</p>
                </Col>
                <Col>
                    <h2>{props[16].title}</h2>
                    <img src={props[16].imageURL} alt={props[16].title} title={props[16].title} />
                    <p>{props[16].description}</p>
                </Col>
                <Col>
                    <h2>{props[17].title}</h2>
                    <img src={props[17].imageURL} alt={props[17].title} title={props[17].title} />
                    <p>{props[17].description}</p>
                </Col>
                <Col>
                    <h2>{props[18].title}</h2>
                    <img src={props[18].imageURL} alt={props[18].title} title={props[18].title} />
                    <p>{props[18].description}</p>
                </Col>
                <Col>
                    <h2>{props[19].title}</h2>
                    <img src={props[19].imageURL} alt={props[19].title} title={props[19].title} />
                    <p>{props[19].description}</p>
                </Col>
                
            </Row>

        </Container>
    );
}

export default Beasts