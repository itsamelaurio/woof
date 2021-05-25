import React from "react";

export default function ShowFavorites(props){
    function deleteFavorite(id, favorites){
    
        favorites.map((dog, index )=> {
            try{ if(dog.id == id){
                favorites.splice(index, 1);
                props.setFavorites(favorites);
                localStorage.setItem("favorites", JSON.stringify(favorites));}}
            catch{}})
    }
    return(
        <div>
        {props.favorites.map(dog => <img src={dog.url} id={dog.id} onClick={() => deleteFavorite(dog.id, props.favorites)}/>)}
        </div>
    )
}