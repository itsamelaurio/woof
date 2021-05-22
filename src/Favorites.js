import React from "react";
import ShowFavorites from "./ShowFavorites";

export default function Favorites(props){
    function getFavorites(){
        let favorites = JSON.parse(localStorage.getItem("favorites"));
        return favorites;
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
    
    function showFavorites(){ //vet inte hur jag ska visa favorites på bästa sätt, 
        //ett alt borde va att trycker man på favorites så visas dem och sökresultatet döljs
    }
    
    return(
        <div>
            <button className="btn btn-danger" onClick={() => saveFavorites(props.dog)}> Save dog </button>
           {// <button className="btn btn-danger" onClick={() => showFavorites()}> Show favorites </button> 
           }
           {// <ShowFavorites favorites={getFavorites()} saveFavorites={saveFavorites} /> {/* så nu visas favoriterna med en gång*/}
           }
        </div>
    )
}