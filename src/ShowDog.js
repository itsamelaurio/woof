import React from 'react';
import axios from "axios";

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
        props.setDog({
          "url": data[0]["url"],
          "id": data[0]["id"],
          "breed": data[0]["breeds"][0]["name"]
        });
        
      });
  }

    return (
        <div className="text-center d-flex flex-column">
            <div className="p-2">
                <img src={props.dog["url"]} className="big" alt=""/> {/*kanske ska lägga till id så det går att dölja?*/}
            </div>
            <div className="p-2">
                <button className="btn btn-danger" onClick={() => dogCall()}> {" "} Click me </button>
            </div>
            
        </div>
    )
}
