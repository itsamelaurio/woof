import React from "react";
import axios from "axios";

export default function Component() {
  let [image, setImage] = React.useState("");

  function componentDidMount() {
    axios
      .get(`https://api.thedogapi.com/v1/breeds/search/`, {
        headers: {
          "x-api-key": "30777f0e-7f95-4c79-b4b3-b657b6bdd296",
        },
        params: {
          q: "lab",
        },
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        //console.log(data[0]["url"]);
        //setImage(data[0]["url"]);
      });
  }

  return (
    <div>
      <h1>woofwoof</h1>
      <img src={image} />
      <button className="btn btn-danger" onClick={() => componentDidMount()}>
        {" "}
        Click me
      </button>
    </div>
  );
}
