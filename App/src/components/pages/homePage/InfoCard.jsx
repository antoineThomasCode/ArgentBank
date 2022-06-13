import React from "react";

function InfoCards ({cardsArray}) {
    return (
        cardsArray.map(card => 
        <article>
            <div>
                <img className="icons" src={card.img} alt={card.alt} />
            </div>
            <h3>
                {card.title}
            </h3>
            <p>
                {card.text}
            </p>
        </article>)
    )
}
export default InfoCards