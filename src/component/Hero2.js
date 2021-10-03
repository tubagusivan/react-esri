import React from "react";
import fire from "../fire";
import Map2 from "./Map2";
import { useHistory } from "react-router-dom";

const Hero2 = () => {
    
    const history = useHistory();
    const signOut = async (e) => {
        e.preventDefault();
  
        await fire.auth().signOut().then(function() {
          console.log("Successfully signed out.")
  
        }).catch(function(error) {
          console.log(error)
          console.log("An error occurred")
        });
  
        history.push("/");
    }

    return (

        <div className = "App">
          <section className = "hero">
              <nav>
                  <h2>Peta Penggunaan Lahan DKI Jakarta</h2>
                  <button type="submit" name="button" onClick = {signOut}>Log out</button>
              </nav>
          </section>
          <Map2 />
        </div>

    )
};

export default Hero2;