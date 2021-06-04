import React from "react";
import Favorites from "./Favorites";
import ShowDog from './ShowDog';
import Navbar from './Navbar';
import "./style.css";

export default function Component() {
  let [dog, setDog] = React.useState(false); //State for the current dog
  let faves = getFavorites();
  let [favorites, setFavorites] = React.useState(faves);  //State for the users favorites
  
  //Every time favorites change, update LocalStorage
  React.useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);
  
    //Returns the favorites from localStorage
  function getFavorites(){
    let localFav = JSON.parse(localStorage.getItem("favorites"));
    if (localFav == null){
      return []
    }else{
      return localFav;
    }
  }
  
  return (
    <div className="App">
    <div className="container">
      <h1>Woof</h1>
      <Navbar dog = {dog} setDog={setDog}/>
      <ShowDog setDog={setDog} dog={dog} setFavorites={setFavorites} favorites={favorites}/>    
      <Favorites dog={dog} favorites={favorites} setFavorites={setFavorites}/>
    </div>
    </div>
  );
}
