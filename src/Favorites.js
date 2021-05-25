import React from "react";
import ShowFavorites from "./ShowFavorites";
import { orderBy } from "lodash";

export default function Favorites(props) {
    // när man trycker på spara hund så sparas inte den hunden man ser utan den förra
    let localFav = getFavorites();
    let [favorites, setFavorites] = React.useState(localFav);

    React.useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    function getFavorites() {
        let local = JSON.parse(localStorage.getItem("favorites"));
        
        if (local == null){
            return [];
        }else{
            return local;
        }
    }

    function sortBreed() {
        console.log(orderBy(favorites, "breed", "asc"));
    }

    function saveFavorites() {

        setFavorites([...favorites, (props.dog)]);
    }

    /*}
    function HideSaveBtn(){
        if (props.dog === ""){
            document.getElementById("save").style.display = "none";
        }
        else{
            document.getElementById("save").style.display = "block";
        }
    }
    */

    function showFavorites() {
        document.getElementById("favourites").style.display = "block";
    }

    return (
        <div>
            <button id ="save" className="btn btn-danger" /*HideSaveBtn={HideSaveBtn()} */ onClick={() => saveFavorites()}> Save dog </button>
            <button className="btn btn-danger" onClick={() => sortBreed()}> Sort breed </button>
            <button className="btn btn-danger" onClick={() => showFavorites()}> Show favorites </button>

            <div id="favourites">
                <ShowFavorites favorites={favorites} setFavorites={setFavorites} />
            </div>

        </div>
    )
}