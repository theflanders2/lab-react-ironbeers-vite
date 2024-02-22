import axios from "axios";
import { useState, useEffect } from "react";
import { Spin } from 'antd';

function RandomBeersPage() {
    const [fetching, setFetching] = useState(true); // activate spin animation
    const [randomBeer, setRandomBeer] = useState([])
    
    useEffect(() => {
        // console.log("useEffect - Initial render (Mounting)");
        console.log("Random beer details found.");
        console.log("Fetching data...");
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
          .then((response) => {
            console.log("Random beer details:", response.data)
            setRandomBeer(response.data); // add the beer's details to the state
            setFetching(false); // remove the spin animation
          });
    }, []); // useEffect will only be triggered once since brackets are empty

    if (fetching) {
        return (
          <div>
            <Spin />
          </div>
        )
    }
    else {
        return (
            <div className="beer-details">
                <img src={randomBeer.image_url} />
                <h1>{randomBeer.name}</h1>
                <h3>{randomBeer.tagline}</h3>
                <h3>{randomBeer.attenuation_level}</h3>
                <h4>{randomBeer.first_brewed}</h4>
                <p>{randomBeer.description}</p>
                <h4>{randomBeer.contributed_by}</h4>
            </div>
        )
    }
}

export default RandomBeersPage;
