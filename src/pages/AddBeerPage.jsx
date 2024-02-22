import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function AddBeerPage() {
    const [ name, setName ] = useState("");
    const [ tagline, setTagline ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ firstBrewed, setFirstBrewed ] = useState("");
    const [ brewersTips, setBrewersTips ] = useState("");
    const [ attenuationLevel, setAttenuationLevel ] = useState(0);
    const [ contributedBy, setContributedBy ] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the form from reloading the page
        // Add the logic to add a new food and add it to the state variable foods

        const id = uuidv4();
        const newBeer = {
            id,
            name, // equivalent to name: name, since same exact name is used, only need one instance
            tagline,
            description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy
        }
        console.log('Newly added Beer',newBeer)

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then(() => navigate('/beers'));
    }

    return (
        <div className="create-new-beer-container">
            <form onSubmit={handleSubmit}>

                <label>Name</label>
                <input 
                type="text" 
                name="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                />
                <br />

                <label>Tagline</label>
                <input 
                type="text" 
                name="tagline" 
                value={tagline} 
                onChange={(e) => setTagline(e.target.value)} 
                />
                <br />

                <label>Description</label>
                <textarea 
                type="text" 
                name="description" 
                value={description}
                rows={15} 
                cols={50} 
                onChange={(e) => setDescription(e.target.value)} 
                />
                <br />

                <label>First Brewed</label>
                <input 
                type="text" 
                name="first_brewed" 
                value={firstBrewed} 
                onChange={(e) => setFirstBrewed(e.target.value)} 
                />
                <br />

                <label>Brewer's Tips</label>
                <input 
                type="text" 
                name="brewers_tips" 
                value={brewersTips} 
                onChange={(e) => setBrewersTips(e.target.value)} 
                />
                <br />

                <label>Attenuation Level</label>
                <input 
                type="number" 
                name="attenuation_level" 
                value={attenuationLevel} 
                onChange={(e) => setAttenuationLevel(e.target.value)} 
                />
                <br />

                <label>Contributed By</label>
                <input 
                type="text" 
                name="contributed_by" 
                value={contributedBy} 
                onChange={(e) => setContributedBy(e.target.value)} 
                />
                <br />

                <button type="submit">Add Beer</button>

            </form>

        </div>
    )
}

export default AddBeerPage;
