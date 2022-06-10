import React from "react";
import bannerImage from "../../../assets/images/bank-tree.jpeg";
import "../../../scss/Home.scss"

function Home () {
    return (
        <main id="homePage">
        <section className="banner-container">
            <figure>
                <img src={bannerImage} alt="Plante qui pousse dans une verre rempli de pièces de monnaie" />
            </figure>
            <div className="slogan-container">
                <h2>
                    No fees. <br />
                    No minimum deposit. <br />
                    High interest rates.
                </h2>
                <p>
                    Open a savings account with <br />
                    Argent Bank today!
                </p>

            </div>
        </section>
        <section>
            <p> ici la partie avec les infocards</p>
        </section>

    </main>
    )
}

export default Home