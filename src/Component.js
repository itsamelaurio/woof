import React from "react";
import axios from "axios";
import Favorites from "./Favorites";

export default function Component() {
  let [dog, setImage] = React.useState("");

  function componentDidMount() {
    axios
      .get(`https://api.thedogapi.com/v1/images/search`, {
        headers: {
          "x-api-key": "30777f0e-7f95-4c79-b4b3-b657b6bdd296",
        },
        
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        setImage({
          "url": data[0]["url"],
          "id": data[0]["id"]
        });
      });
  }

  return (
    <div>
      <h1>woofwoof</h1>
      <img src={dog["url"]}/> {/*kanske ska lägga till id så det går att dölja?*/}
      <button className="btn btn-danger" onClick={() => componentDidMount()}> {" "} Click me </button>
      <Favorites dog={dog}/>
    </div>
  );
}
