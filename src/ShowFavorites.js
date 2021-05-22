import React from "react";

export default function ShowFavorites(props){
    function deleteFavorite(id, favorites){
        console.log(id);
        console.log("togs bort");
        /* något åt detta hållet kanske 
        $.each(favorites, function(index, dog){
        try{ if(dog.id == id){
            favorites.splice(index, 1);
            props.saveFavorites(favorites);
        }}catch{}
    })

        */
    }
    return(
        <div>
        {props.favorites.map(dog => <img src={dog.url} id={dog.id} onClick={() => deleteFavorite(dog.id, props.favorites)}/>)}
        </div>
    )
}