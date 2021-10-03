import React from "react";
import Map from "../component/Map";
import { useHistory } from "react-router-dom";

const Hero = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/Hero2");
}

    return (
        
        <div className = "App">
            <section className = "hero">
                <nav>
                    <h2>Histori Banjir Jakarta 2021</h2>
                    <button onClick = {handleClick}>Click here</button>
                </nav>
            </section>
            <Map />
        </div>
    )
};

export default Hero;