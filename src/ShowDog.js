import React, { useState } from 'react';
import axios from 'axios';

export default function ShowDog(props) {

  function dogCall() {
    axios
      .get(`https://api.thedogapi.com/v1/images/search`, {
        headers: {
          "x-api-key": "30777f0e-7f95-4c79-b4b3-b657b6bdd296",
        },

      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data[0]["breeds"].length === 0) {
          props.setDog({
            "url": data[0]["url"],
            "id": data[0]["id"],
            "breed": "",
            "date": new Date().toLocaleString()
          });
        }
        else {
          props.setDog({
            "url": data[0]["url"],
            "id": data[0]["id"],
            "breed": data[0]["breeds"][0]["name"],
            "date": new Date().toLocaleString()
          });
        }
      });
  }

  function saveFavorites(favorites) {
    props.setFavorites([...favorites, (props.dog)]);
  }

  return (
    <div className="text-center d-flex flex-column" >
      <div id="search-result">
        <div className="p-2">
            <button className="btn btn-danger" onClick={() => dogCall()}> Show new dog </button>
        </div>
        {props.dog && <div className="p-2">
          <h2>{props.dog.breed}</h2>
          <img src={props.dog.url} className="big" alt="" />
        </div>}
        <button id="save" className="btn btn-danger" onClick={() => saveFavorites(props.favorites)}> Save dog </button>
      </div>
    </div>
  )
}
