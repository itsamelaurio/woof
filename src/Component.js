import React from "react";
import Favorites from "./Favorites";
import ShowDog from './ShowDog';
import "./style.css";

export default function Component() {
  let [dog, setDog] = React.useState("");
  
  return (
    <div>
      <h1>Woof</h1>
      <ShowDog setDog={setDog} dog={dog}/>
            
      <Favorites dog={dog}/>
    </div>
  );
}
