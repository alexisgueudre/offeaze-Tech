import React from 'react'
import "./coworking.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState } from "react";

//partie coworking avec recupération des données dans un props nommée data et affichage de la reservation dans pop-up
function coworking(props) {

    const datas = props.location.dataFiltered.filtered

    const Popups = ({ data }) => {
        const [datetime,setDate] = useState([]);
        const [price,setPrice] = useState([]);
        const tva = Math.round((100*(parseFloat(price) / 100)*20))/100;
        const finalPrice = (parseFloat(price) + tva);

        return (
            <Popup trigger={<button className="col-3 text-right btn btn-orange">Reserver</button>} position="center center">
                {close => (
                    <div className="container-fluid">
                        <a className="close" onClick={close}>
                            &times;
                        </a>
                        <div className="row col-12 pb-3">
                            <img src={data.Photo} />
                        </div>
                        <div className="col-12 row">
                            <div className="blue col-6">
                                {data.NameCoworking}
                                <br></br>
                                {data.Localisation}
                            </div>
                            <div className="col-6">
                                <p>une demande au mois ? veuillez nous contacter a : contact@offeaze.co</p>
                            </div>
                        </div>
                        <div className="col-12 row">
                            <p className="d-flex blue">Type de location:
                                <div class="col-2 mr-3 form-check form-check-inline">
                                    <input class="form-check-input" onClick={(event) => setPrice(event.target.value)} type="radio" name="radAnswer" id="heure1" value={data.Prix_Heure_HT} />
                                    <label class="blue form-check-label" for="heure">heure </label>
                                </div>
                                <div class="col-2 form-check form-check-inline">
                                    <input class="form-check-input" onClick={(event) => setPrice(event.target.value)} type="radio" name="radAnswer" id="half-day" value={data.Prix_Demi_Journer_HT} />
                                    <label class="blue form-check-label" for="half-day">half-day</label>
                                </div>
                                <div class="col-2 form-check form-check-inline">
                                    <input class="form-check-input" onClick={(event) => setPrice(event.target.value)} type="radio" name="radAnswer" id="jour" value={data.Prix_Journer_HT} />
                                    <label class="blue form-check-label" for="jour">jour</label>
                                </div>
                            </p>
                        </div>
                        <div className="col-12 row">
                            <div class="col-6">
                                <label for="peapole" className="blue pr-4">Nombre de personne :</label>
                                <input type="number" id="peapole" name="peapole" min="1" max="100"/>
                            </div>
                        </div>
                        <div className="col-12 pt-3 row">
                            <div class="col-6">
                                <label for="start">Selectionnez votre date : </label>
                                <input type="date" id="start" onClick={(event) => setDate(event.target.value)} name="trip-start" value="2021-08-20" min="2021-08-20" />
                            </div>
                            <div className="col-6">
                                <p>Details de la réservaton</p>
                                <p>Pour le {datetime} </p>
                                <p>Prix (HT) : {price}€ </p>
                                <p>part TVA =  {tva}€ </p>
                                <p>Prix total = {finalPrice}€</p>
                            </div>
                        </div>
                        <div className="col-12 pb-3 row">
                            <div className="col-6">
                                <p>une demande spéciale</p>
                                <input type="text"></input>
                            </div>
                            <div className="col-6">
                            <button className="text-right btn btn-orange">Valider</button>
                            </div>
                        </div>
                    </div>
                )}
            </Popup>
        )
    }


    //const pour affichage des données dans le front
    const mapping = datas.map((data) =>
        <div className="cards col-6 pb-4" key={data.id}>
            <div className="card size-cars">
                <img className="card-img-top" src={data.Photo} alt="Card image cap"></img>
                <div className="card-body">
                    <div className="row">
                        <div className="col-10">
                            <h5 className="card-title">{data.NameCoworking}</h5>
                        </div>
                        <div className=" col-1 d-flex">
                            <div>
                                <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1615066501072x922824244890065900%2Fmeeting-room%2520%25281%2529.png?w=32&h=32&auto=compress&fit=crop&dpr=1"></img>
                            </div>
                            <div>
                                <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1615066537715x848517052452339600%2Fworkplace.png?w=32&h=32&auto=compress&fit=crop&dpr=1"></img>
                            </div>
                        </div>
                    </div>

                    <p className=" blue card-text border-location"> {data.Localisation}</p>
                    <div className="row col-12 pb-4">
                        <p className=" blue card-text text-left">A partir de :</p>
                        <div className="col-4 text-center">
                            <p className="blue border-price card-text">{data.Prix_Heure_HT}
                                <br></br>
                                <p className=" blue card-text">€/heure*</p>
                            </p>
                        </div>
                        <div className="col-4 text-center">
                            <p className="blue border-price card-text">{data.Prix_Demi_Journer_HT}
                                <br></br>
                                <p className="blue card-text">€/demi-journée*</p>
                            </p>
                        </div>
                        <div className="col-4 text-center">
                            <p className="blue border-price card-text">{data.Prix_Journer_HT}
                                <br></br>
                                <p className="blue card-text">€/jour*</p>
                            </p>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-8">
                            <p className="blue">*Prix HT</p>
                        </div>
                        <Popups data={data} />
                    </div>

                </div>
            </div>
        </div>
    )
    return (
        <div className="container-fluid">
            <div className=" d-flex row col-12 pt-5 pb-5">
                <h3 className=" pb-3 text-center white">Résultat de la recherche</h3>
                {mapping}
            </div>
            <div>
                <div id="popup-root" /></div>
        </div>
    )
}
export default coworking
