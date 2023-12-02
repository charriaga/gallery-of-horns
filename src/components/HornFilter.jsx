/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import HornSelector from "./HornSelector";
import items from './data.json'
import Gallery from './Gallery'

function HornFilter(props) {

    const allHorns = ['All', 1, 2, 3, 100]

    const [horns, setHorns] = useState(items.horns);

    function handleSelection(choice) {
        let updatedHorns;

        if (choice === 1) {
            updatedHorns = props.horns.filter(val => val === 1);
        } else if (choice === 2) {
            updatedHorns = props.horns.filter(val => val === 2);
        } else if (choice === 3) {
            updatedHorns = props.horns.filter(val => val === 3);
        } else if (choice === 100) {
            updatedHorns = props.horns.filter(val => val === 100);
        } else if (choice === 'All') {
            updatedHorns = allHorns;
        }

        setHorns(updatedHorns)

        return horns;
    }

    return (
        <div>
            <h3>Filter by Number of Horns</h3>
            <HornSelector onSelect={handleSelection} />
            <Gallery itemRender={items.filter(horns => items.horns === horns)}/>
        </div>
    )
}


export default HornFilter