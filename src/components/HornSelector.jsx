/* eslint-disable react/prop-types */
import React from 'react'
import Form from 'react-bootstrap/Form'

function HornSelector (props) {

    const changeFunction = (event) => {
        props.onSelect(event.target.value);
    }

    return (
        <Form.Select onChange={changeFunction}>
            <option value='All'>All</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={100}>100</option>
        </Form.Select>
    )
}

export default HornSelector;