import React from 'react'
import "./SearchBar.css"
import { useEffect,useState } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Link } from 'react-router-dom';

function SearchBar() {
    //tableaux des données récupérer sur mongodb
    const [data, setData] = useState([]);
    //partie search
    const [search,setSearch] = useState("");
    //tableaux des resultat filtrer
    const filtered = [];
    //fetch des données
    useEffect(() =>
    {
      fetch("http://localhost:5500/coworking",)
        .then(res => res.json())
        .then(
          (response) => {
            setData(response);
          }
        )
    }, [])
    //partie trie et comparaison de la value saisie par l'user
    const handleSearch = (event) => {
        const value = event.target.value;
        setSearch(value);
    }

    return (
        <div className="SearchBar bar-center pt-5 pb-5 container-fluid">
            <div className="col-6">
                <div className="input-group rounded">
                 <input  type="search" onChange={handleSearch} className="form-control rounded" placeholder="Paris, France" aria-label="Search" aria-describedby="search-addon" />
                 <Link to={{pathname: "/coworking", dataFiltered:{filtered: filtered}}}><button className="input-group-text border-0" id="search-addon"> <i className="fas fa-search"></i></button></Link>
                 </div>
            </div>
            <div className="result">
            {data.filter((value)=>{
                const Location = value.Localisation.includes(search)

                    if (Location == true) {
                        filtered.push(value)
                    }
            })}
            </div>
        </div>
    )
}

export default SearchBar
