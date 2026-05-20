import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function CharacterPage() {
  const {id} = useParams();
  console.log(id);
  
  const [character, setCharacter]= useState({});

  

  useEffect(() => {
    // fetch dati usando l'id
    const api_url=`https://rickandmortyapi.com/api/character/${id}`
        fetch(api_url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                
            // qui salvi i dati nello stato
            setCharacter(data);   
          })
          .catch(err => console.error(err));
        
  }, []); 

  return (
    <main className="min-vh-100">
      {/* <h1>ID personaggio:</h1>
      <h2> {id}</h2> */}
      <div className="container">
        <div className="row">
          <div className="col-5 mx-auto my-5">
            <div className="card">
              <img src={character.image} alt={character.name} />
              <div className="card-body">
                <h5>{character.name}</h5>
                <p>id personaggio: {character.id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    
  );
}
