import React from 'react';
import axios from "axios";
const $ = window.$;

export default function Navbar(props) {
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


      $('#dropdown-menu').on('select2:select', function (e) {
        var data = e.params.data;
        console.log(data);
    });
    
      
        
    

      function populateBreeds(){
        let i = 1;  
        breeds.forEach((breed) => {
            const option = document.createElement("option");
            option.className="dropdown-item";
            option.value=i;
            var text = document.createTextNode(breed);
            option.appendChild(text);
            document.querySelector('#dropdown-menu').appendChild(option);



            i++;
        }
        )
      }

      $('#dropdown-menu').empty();
      populateBreeds();


    let faves = document.getElementById("favorites");
    let search = document.getElementById("search-result");
    
    function showFavorites(){
        faves.style.display = "block";
        search.style.display = "none";

    }
    function showSearch(){
        search.style.display = "block"
        faves.style.display = "none";
    }
    
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#" onClick={() => breedCall()}>Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => showSearch()}>Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => showFavorites()}>Favourites </a>
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
