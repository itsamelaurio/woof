import React from "react";

export default function ShowFavorites(props){
    function deleteFavorite(id, favorites){
        props.setFavorites(favorites.filter((dog) => dog.id !== id))
    }

    return(
        <div>
        {props.favorites.map(dog => <img src={dog.url} id={dog.id} onClick={() => deleteFavorite(dog.id, props.favorites)}/>)}
        </div>
    )
}