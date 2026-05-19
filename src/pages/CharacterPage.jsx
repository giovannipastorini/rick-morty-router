import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function CharacterPage() {
  const { id } = useParams();

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
        
  }, []);

  return (
    <div>
      <h1>ID personaggio: {id}</h1>
    </div>
  );
}
