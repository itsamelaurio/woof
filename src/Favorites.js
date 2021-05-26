import React from "react";
import { orderBy } from "lodash";

export default function Favorites(props) {
    function sortBreed() {
        console.log(orderBy(props.favorites, "breed", "asc"));
    }

    function deleteFavorite(id, favorites){
        props.setFavorites(favorites.filter((dog) => dog.id !== id))
    }

    return (
        <div> 
            <div id="favorites">
                <button className="btn btn-danger" onClick={() => sortBreed()}> Sort breed </button>
                {props.favorites.map(dog => <img src={dog.url} id={dog.id} onClick={() => deleteFavorite(dog.id, props.favorites)}/>)}
            </div>

        </div>
    )
}