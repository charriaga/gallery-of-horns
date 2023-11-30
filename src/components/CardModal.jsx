/* eslint-disable react/prop-types */
import React from "react";
import Modal from "react-bootstrap/Modal";


function CardModal (props) {
    return (
        <Modal show={props.show} onHide={props.onClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Img src={props.imageUrl}></Modal.Img>
            <Modal.Body>
                <Modal.Title>{props.title}</Modal.Title>
                {props.description}
            </Modal.Body>
        </Modal>
    )
}

export default CardModal;