import React from "react";
import ShowFavorites from "./ShowFavorites";
import {orderBy} from "lodash";

export default function Favorites(props){
    function getFavorites(){
        let favorites = JSON.parse(localStorage.getItem("favorites"));
        return favorites;
      }

    function sortBreed(){
        let temp = getFavorites();
        orderBy(temp,"breed","desc");
        console.log(temp);
    }
    
    function saveFavorites(dog){
        let favorites = getFavorites();
            try{ 
                favorites.push(dog);
            } catch{
                favorites = [dog]
            }
        localStorage.setItem("favorites", JSON.stringify(favorites));
        }
    
    function showFavorites(){ 
            document.getElementById("favourites").style.display = "block";            
    }
    
    return(
        <div>
            <button className="btn btn-danger" onClick={() => saveFavorites(props.dog)}> Save dog </button>
            <button className="btn btn-danger" onClick={() => sortBreed()}> Sort breed </button>
           <button className="btn btn-danger" onClick={() => showFavorites()}> Show favorites </button> 
           
           <div id="favourites">
           <ShowFavorites favorites={getFavorites()} saveFavorites={saveFavorites} /> {/* så nu visas favoriterna med en gång*/}
           </div>
           
        </div>
    )
}