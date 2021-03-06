import React from 'react';
import axios from "axios";
import Select from "react-select";

export default function Navbar(props) {
    let [breeds, setBreeds] = React.useState([]);
    let [selected, setSelected] = React.useState({});
    
    //Calls the list of all breeds from the API
    function breedCall() {
        axios
          .get(`https://api.thedogapi.com/v1/breeds`, {
            headers: {
              "x-api-key": "30777f0e-7f95-4c79-b4b3-b657b6bdd296",
            },
          })
          .then((res) => {        
            const data = res.data;
            const result = [];
            for(let i = 0; i < data.length ; i++){
                result.push({
                    "value" : data[i]["id"],
                    "label" : data[i]["name"]
                });
            }
            setBreeds(result);
            }       
          );
    }

    //Everytime user selects an option in the dropdown menu, call a new dog from the API
    React.useEffect(()=> {
      axios.get('https://api.thedogapi.com/v1/images/search',{
          headers: {
              "x-api-key": "30777f0e-7f95-4c79-b4b3-b657b6bdd296"
          },
          params: {
              "breed_ids" : selected.value,
              "has_breeds" : true
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
    },[selected])
     
    //Shows the  favorite page
    function showFavorites(){
        document.getElementById("favorites").style.display = "block";
        document.getElementById("search-result").style.display = "none";
        document.getElementById("dropdown").style.display = "none";
    }

    //Shows the search page
    function showSearch(){
        document.getElementById("search-result").style.display = "block"
        document.getElementById("dropdown").style.display = "block";
        document.getElementById("favorites").style.display = "none";
    }

    //Calls the breeds from the API once when page is rendered
    React.useEffect(() => {
        breedCall();
     }, [])
   
     return (   
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link navbar-brand" href="#" onClick={() => showFavorites()}>Favourites </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link navbar-brand" href="#" onClick={() => showSearch()}>Search</a>
                </li>
                <Select id="dropdown"
                    options = {breeds}
                    onChange = {setSelected}
                    placeholder = "Choose Breed"
                    isSearchable   
                />
                </ul>
            </div>
         </nav>
    )
}
