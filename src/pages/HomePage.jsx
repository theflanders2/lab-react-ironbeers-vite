import { Link } from 'react-router-dom'
import allBeersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";
import Navbar from '../components/Navbar';

function HomePage() {
    return (
        <div>
            <Navbar />
            
            <Link to="/beers">
                <img src={allBeersImg} />
                <br />
                All Beers
                <br />
                <br />
            </Link>
            
            <Link to="/random-beer">
                <img src={randomBeerImg} />
                <br />
                Random Beer
                <br />
                <br />
            </Link>
            
            <Link to="/new-beer">
                <img src={newBeerImg} />
                <br />
                New Beer
                <br />
                <br />
            </Link>
        </div>
    )
}

export default HomePage;
