import React from "react";
import {orderBy} from "lodash";

export default function Favorites(props) {
   
    //Sorts the favorites by their breed
    function sortBreed() {
        props.setFavorites(orderBy(props.favorites, "breed", "asc"))
    }

    //Sorts the favorites by the order they were saved
    function sortDate() {
        props.setFavorites(orderBy(props.favorites, "date", "desc"))
    }

    //Deletes the selected favorite dog
    function deleteFavorite(id, favorites){
        props.setFavorites(favorites.filter((dog) => dog.id !== id))
    }

    return (
        <div> 
            <div id="favorites">
                <button className="btn btn-danger" onClick={() => sortBreed()}> Sort by breed </button>
                <button className="btn btn-danger" onClick={() => sortDate()}> Sort by date </button>
                <div id="dog-list" className="mb-4">
                {props.favorites.map(dog =>  <div className="card favorite card-size" key={dog.date}>
                    <img src={dog.url} className="card-img-top dogImg" alt="favorite dog"/>
                    <div className="card-body">
                        <h5 className="card-title">{dog.breed}</h5>
                        <p className="card-text">Added: {dog.date}</p>
                        <img src="images/delete.png" alt="delete dog" className="delete-dog" onClick={() => deleteFavorite(dog.id, props.favorites)}></img>
                    </div>
                    </div> )}
                </div>
            </div>
        </div>
    )
}