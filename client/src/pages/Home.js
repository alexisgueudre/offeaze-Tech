import React from 'react';
import "./Home.css";
import Nav from '../components/Nav';
import SearchBar from '../components/SearchBar';

const Home = () => {

    return (
        <div className="Home background-1">
          <Nav/>
            <div className=" text-center pt-5 pb-5">
            <h1>Plateforme de réservation d'espaces de travail</h1>
            <p>Trouvez et réservez l'espace de travail qui vous inspire</p>
            </div>
          <SearchBar/>
        </div>
    );
};

export default Home;