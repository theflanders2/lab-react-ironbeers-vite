import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Spin } from 'antd';

function BeerDetailsPage() {
    const [fetching, setFetching] = useState(true); // activate spin animation
    const [foundBeer, setFoundBeer] = useState(null);

    const { beerId } = useParams();
    // console.log('Current beerId is:', beerId);

    useEffect(() => {
        // console.log("useEffect - Initial render (Mounting)");
        console.log("Beer details found.");
        console.log("Fetching data...");
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
          .then((response) => {
            console.log("Beer details:", response.data)
            setFoundBeer(response.data); // add the beer's details to the state
            setFetching(false); // remove the spin animation
          });
    }, [beerId]); // useEffect will run after the initial render and each time that the URL parameter with the beerId changes.

    if (foundBeer === null || undefined) {
        console.log('Current beerId is:', beerId);
        console.log("Beer details not yet found. Beer details are still being retrieved.")
        return (
          <div>
            {fetching && <Spin />}
          </div>
        )
    }
    else {
        return (
            <div className="beer-details">
                <img src={foundBeer.image_url} />
                <h1>{foundBeer.name}</h1>
                <h3>{foundBeer.tagline}</h3>
                <h3>{foundBeer.attenuation_level}</h3>
                <h4>{foundBeer.first_brewed}</h4>
                <p>{foundBeer.description}</p>
                <h4>{foundBeer.contributed_by}</h4>
            </div>
        )
    }
}

export default BeerDetailsPage;
