import React from "react"

function Gallery(props) {
    return (
        <div>
            <p>{props.artist}</p>
            <img src={props.objectImg} alt={props.title}/>
        </div>
    )
}

export default Gallery