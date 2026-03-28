import React from 'react'
import '../App.css'
import {useState} from 'react'


const Acoordion = ({ title, detail }) => {
    const [showDetails, SetShowDetails] = useState(false);
    return (
        <div>
            <h5><button className={showDetails ? 'rotated' : ""} onClick={() => SetShowDetails(!showDetails)}>&gt;</button>{title}</h5>
            {showDetails && <p>{detail}</p>}
        </div>

    )
}

export default Acoordion
