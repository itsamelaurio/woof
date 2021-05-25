import React from "react";
import ShowFavorites from "./ShowFavorites";
import { orderBy } from "lodash";

export default function Favorites(props) {
    function sortBreed() {
        console.log(orderBy(favorites, "breed", "asc"));
    }

    function deleteFavorite(id, favorites){
        props.setFavorites(favorites.filter((dog) => dog.id !== id))
    }

    /*} flytta till showdog
    function HideSaveBtn(){
        if (props.dog === ""){
            document.getElementById("save").style.display = "none";
        }
        else{
            document.getElementById("save").style.display = "block";
        }
    }
    */

    return (
        <div>
        {/* flytta till showdog */}    <button id ="save" className="btn btn-danger" /*HideSaveBtn={HideSaveBtn()} */ onClick={() => saveFavorites()}> Save dog </button>
            <div id="favorites">
                <button className="btn btn-danger" onClick={() => sortBreed()}> Sort breed </button>
                {props.favorites.map(dog => <img src={dog.url} id={dog.id} onClick={() => deleteFavorite(dog.id, props.favorites)}/>)}
            </div>

        </div>
    )
}