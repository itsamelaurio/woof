import React from "react";
import { orderBy } from "lodash";

export default function Favorites(props) {
    function sortBreed() {
        props.setFavorites(orderBy(props.favorites, "breed", "asc"))
    }

    function sortDate() {
        props.setFavorites(orderBy(props.favorites, "date", "asc"))
    }

    function deleteFavorite(id, favorites){
        props.setFavorites(favorites.filter((dog) => dog.id !== id))
    }

    return (
        <div> 
            <div id="favorites">
                <button className="btn btn-danger" onClick={() => sortBreed()}> Sort by breed </button>
                <button className="btn btn-danger" onClick={() => sortDate()}> Sort by date </button>
                <div id="dog-list">
                {props.favorites.map(dog => <div className="favorite" key={dog.date}> <h6>{dog.breed}</h6> <img src="images/delete.png" alt="delete dog" className="delete-dog" onClick={() => deleteFavorite(dog.id, props.favorites)}></img> <img src={dog.url} id={dog.id} /> </div>)}
                </div>
            </div>

        </div>
    )
}