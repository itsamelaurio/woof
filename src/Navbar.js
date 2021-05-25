import React from 'react';
import axios from "axios";
const $ = window.$;

export default function Navbar() {
    let [breeds, setBreeds] = React.useState([]);

    $(document).ready(function() {
        $('#dropdown-menu').select2();
    });

    function breedCall() {
        axios
          .get(`https://api.thedogapi.com/v1/breeds`, {
            headers: {
              "x-api-key": "30777f0e-7f95-4c79-b4b3-b657b6bdd296",
            },
            
          })
          .then((res) => {        
            const data = res.data;
            console.log(data);
            console.log(data["name"]);
            let temp = [];
            for(let i=0;i<data.length;i++){
                temp.push(data[i]["name"]);
            }   
            setBreeds(temp);         
          });
      }

      function populateBreeds(){
          
        breeds.forEach((breed) => {
            const option = document.createElement("option");
            option.className="dropdown-item";
            var text = document.createTextNode(breed);
            option.appendChild(text);
            document.querySelector('#dropdown-menu').appendChild(option);
        }
        )
      }

      $('#dropdown-menu').empty();
      populateBreeds();

    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#" onClick={() => breedCall()}>Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => document.getElementById("favourites").style.display = "block"}>Favourites </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => document.getElementById("favourites").style.display = "none"}>Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <select className="nav-item dropdown" id="dropdown-menu">
                    <option className="dropdown-item" > Search</option>
                    <option className="dropdown-item">Action</option>
                    <option className="dropdown-item">Another action</option>
                    <option className="dropdown-item">Something else here</option>
                    
                </select>

                </ul>
            </div>
         </nav>
    )
}
