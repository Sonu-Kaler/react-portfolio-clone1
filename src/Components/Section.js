import React from "react";


const Section=({title,description})=>{
    return(
        <div className="section">
            <h2>{title}</h2>
            <p>{description}</p>
            <hr />
        </div>
    )
}
export default Section;