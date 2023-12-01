/* eslint-disable react/prop-types */
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";



function CardModal (props) {
    return (
        <Modal show={props.show} onHide={props.onClose}>
            <Modal.Header></Modal.Header>
            <Modal.Body>
            <img src={props.imageUrl}/>
                <Modal.Title>{props.title}</Modal.Title>
                <p>{props.description}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CardModal;