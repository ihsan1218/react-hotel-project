import React from 'react';
import { Link } from "react-router-dom";
import defaultImg from '../images/room-1.jpeg';

export default function Room({room}) {
    const {images, name, price} = room;
    
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single room" />
                <Link to="rooms" className="btn-primary room-link">
                    Features
                </Link>
                <p className="room-info">{name}</p>
            </div>
        </article>
    )
}
