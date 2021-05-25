import React from "react";
import ShowFavorites from "./ShowFavorites";
import {orderBy} from "lodash";

export default function Favorites(props){
    // när man trycker på spara hund så sparas inte den hunden man ser utan den förra
    let localFav = getFavorites();
    let [favorites, setFavorites] = React.useState(localFav);
    
    function getFavorites(){
        let local = JSON.parse(localStorage.getItem("favorites"));
        return local;
      }

    function sortBreed(){
        console.log(orderBy(favorites,"breed","asc"));
    }

    async function saveFavorites(){
        await setFavorites([...favorites, (props.dog)]);
        await localStorage.setItem("favorites", JSON.stringify(favorites));
        console.log("added to localstorage")
        }
    
    function showFavorites(){
        document.getElementById("favourites").style.display = "block";         
    }
    
    return(
        <div>
            <button className="btn btn-danger" onClick={() => saveFavorites()}> Save dog </button>
            <button className="btn btn-danger" onClick={() => sortBreed()}> Sort breed </button>
           <button className="btn btn-danger" onClick={() => showFavorites()}> Show favorites </button> 
           
           <div id="favourites">
           <ShowFavorites favorites={favorites} setFavorites={setFavorites} />
           </div>
           
        </div>
    )
}