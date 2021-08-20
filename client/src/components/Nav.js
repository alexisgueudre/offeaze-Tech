import React from 'react'
import "./Nav.css"
export default function Nav() {
    return (
        <div className="Nav container-fluid pb-5 pt-3 pl-2">
            <div className="row col-12">
                <div className="col-2 text-center">
                <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1620209127449x266193237168193900%2Flogo_offeaze_blanc.png?w=192&h=105&auto=compress&fit=crop&dpr=1"></img>
                </div>
            <div className="Link text-center row d-flex col-10">
                <div className="border-right col-3">
                    <p>POUR VOTRE ENTREPRISE</p>
                </div>
                <div className="border-right col-3">
                    <p>TROUVER VOTRE ESPACE</p>
                </div>
                <div className="border-right col-3">
                    <p>Connecter-Vous</p>
                </div>
                <div className="border-right col-2">
                    <p>S'INSCRIRE 🤩</p>
                </div>
            </div>
            </div>
        </div>
    )
}
