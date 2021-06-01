import React from 'react';
import axios from "axios";
import Select from "react-select";

export default function Navbar(props) {
    let [breeds, setBreeds] = React.useState([]);
    let [selected, setSelected] = React.useState({});
    

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

            const result = [];
            

            for(let i = 0; i < data.length ; i++){
                result.push({
                    "value" : data[i]["id"],
                    "label" : data[i]["name"]
                });
            }

            console.log(result);
            setBreeds(result);

            console.log(breeds);
             
            }   
                  
          );
      }


      /* $('#dropdown-menu').on('select2:select', function(e) {
        e.stopImmediatePropagation();
        console.log( e.params.data.id );

        axios
      .get(`https://api.thedogapi.com/v1/images/search`, {
        headers: {
          "x-api-key": "30777f0e-7f95-4c79-b4b3-b657b6bdd296",
        },
        params: {
            "breed_ids": e.params.data.id
        }
      })
      .then((res) => {        
        const data = res.data;
            console.log(data);
           if (data[0]["breeds"].length === 0){
            props.setDog({
              "url": data[0]["url"],
              "id": data[0]["id"],
              "breed": ""
            });
           }
           else{
            props.setDog({
              "url": data[0]["url"],
              "id": data[0]["id"],
              "breed": data[0]["breeds"][0]["name"]
            });
           }
            
      });

      }); */
    
      
           


      React.useEffect(()=> {
        axios.get('https://api.thedogapi.com/v1/images/search',{
            headers: {
                "x-api-key": "30777f0e-7f95-4c79-b4b3-b657b6bdd296"
            },
            params: {
                "breed_ids" : selected.value
            }
        }).then((res) => {
            const data = res.data;
            if (data[0]["breeds"].length === 0){
                props.setDog({
                  "url": data[0]["url"],
                  "id": data[0]["id"],
                  "breed": "",
                  "date": new Date().toLocaleString()
                });
               }
               else{
                props.setDog({
                  "url": data[0]["url"],
                  "id": data[0]["id"],
                  "breed": data[0]["breeds"][0]["name"],
                  "date": new Date().toLocaleString()
                });
               }
        }) 
        
         
        console.log(selected);
      },[selected])
     

    function showFavorites(){
        document.getElementById("favorites").style.display = "block";
        document.getElementById("search-result").style.display = "none";

    }
    function showSearch(){
        document.getElementById("search-result").style.display = "block"
        document.getElementById("favorites").style.display = "none";
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
                <Select id="dropdown"
                    /* {breeds.map(breed => {
                        return <option value={breed.id}>{breed.name}</option>
                    })} */
                    options = {breeds}
                    onChange = {setSelected}
                    isSearchable 
                    
                    
                />

                </ul>
            </div>
         </nav>
    )
}
