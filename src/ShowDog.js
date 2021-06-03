import React, {useState} from 'react';
import axios from 'axios';
import Alert from './Alert';

export default function ShowDog(props) {

  const [check, setCheck] = useState(false);
 
  //Fetches a random dog from the API
  function dogCall() {
    axios
      .get(`https://api.thedogapi.com/v1/images/search`, {
        headers: {
          "x-api-key": "30777f0e-7f95-4c79-b4b3-b657b6bdd296",
        },
        params: {
          "has_breeds": true
        }
      })
      .then((res) => {
        const data = res.data;
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
  //Save the current dog to favorites
  function saveFavorites(favorites) {
    setCheck(true);
    setTimeout(function(){ setCheck(false) }, 5000); //Message displayed to the user
    props.setFavorites([...favorites, (props.dog)]);
    dogCall();  //Calls new dog once this dog is saved
  }

  return (
    <div className="text-center d-flex flex-column" >
      <div id="search-result">
        <div className="p-2">
          <button className="btn btn-danger" onClick={() => dogCall()}> Show new dog </button>
        </div>
        {props.dog && <div className="p-2">
          <h2>{props.dog.breed}</h2>
          <img src={props.dog.url} className="big" alt="dog image" />
        </div>}
        <button id="save" className="btn btn-danger" onClick={() => saveFavorites(props.favorites)}> Save dog </button>
        { check && <Alert /> }
      </div>
    </div>
  )
}
