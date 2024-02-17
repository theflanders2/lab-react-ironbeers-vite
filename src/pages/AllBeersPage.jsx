import { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from 'antd';
import { Link } from 'react-router-dom'

const beersApi = "https://ih-beers-api2.herokuapp.com/beers"; // beers data from API stored in a variable


function AllBeersPage() {
    const [fetching, setFetching] = useState(true); // activate spin animation
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        console.log("useEffect - Initial render (Mounting)");
        console.log("Fetching data...");
        axios.get(beersApi) // this will fetch the beers data from the api
          .then((response) => {
            console.log("API response data", response.data)
            setBeers(response.data); // add the list of beers to the state
            setFetching(false); // remove the spin animation
          });
      }, []); // useEffect will only be triggered once since brackets are empty
    


    return (
        <div>
            {fetching && <Spin />}

            {beers.map((singleBeer) => {
                return (
                    <div className="beer-container"  key={singleBeer._id}>
                        <img src={singleBeer.image_url} />
                        <h1>{singleBeer.name}</h1>
                        <h3>{singleBeer.tagline}</h3>
                        <h4>{singleBeer.contributed_by}</h4>
                        <Link to={`/beers/${singleBeer._id}`}>more info</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default AllBeersPage;
