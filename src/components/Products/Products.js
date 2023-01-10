// /* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Product.css'

const Product = ({ card }) => {
    const [activeColor, setActiveColor] = React.useState("");

    return (
        <div className="card-content">
            <p className='card-title'>{card.title}</p>
            <div className='footer-card'>
                <p className='font-Avenir card-price'>€{card.price}</p>
                <div className='color'>
                    <div className={activeColor === "yellow-green" ? "circle-active circle-green-yellow" : "circle circle-green-yellow"} onClick={() => setActiveColor("yellow-green")}></div>
                    <span className={activeColor === "brown" ? "circle-active circle-brown" : "circle circle-brown"} onClick={() => setActiveColor("brown")}></span>
                    <span className={activeColor === "purple" ? "circle-active circle-purple" : "circle circle-purple"} onClick={() => setActiveColor("purple")}></span>
                    <span className={activeColor === "green" ? "circle-active circle-green" : "circle circle-green"} onClick={() => setActiveColor("green")}></span>
                </div>
            </div>
        </div>
    )
}

export default Product