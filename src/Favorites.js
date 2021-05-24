import React from "react";
import ShowFavorites from "./ShowFavorites";
import {orderBy} from "lodash";

export default function Favorites(props){

    let [favorites, setFavorites] = React.useState("");



    function getFavorites(){
        let favorites = JSON.parse(localStorage.getItem("favorites"));
        return favorites;
      }

    function sortBreed(){
        let temp = getFavorites();
        console.log(orderBy(temp,"breed","asc"));
    }
    
    function saveFavorites(){

        setFavorites([...favorites, (props.dog)])

        console.log(favorites);

        localStorage.setItem("favorites", JSON.stringify(favorites));
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
           <ShowFavorites favorites={favorites} setFavorites={setFavorites} /> {/* så nu visas favoriterna med en gång*/}
           </div>
           
        </div>
    )
}