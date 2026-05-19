import { useEffect, useState } from "react"



export default function HomePage (){

    const api_url="https://rickandmortyapi.com/api/character"
    const [characters, setCharacters]= useState([])

    function  fetchCharacters(api_url){
        fetch(api_url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            // qui salvi i dati nello stato
            setCharacters(data);
        })
    }

    useEffect(()=>{
        fetchCharacters(api_url);
    }, [])

    return(
        <main>
            <h1>HomePage</h1>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Rick and Morty</h1>
                    <p className="col-md-8 fs-4">
                        Using a series of utilities, you can create this highlighted hero
                        section. Check out the examples below for how you can remix and
                        restyle it to your liking.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        characters.map(character =>(
                            <div className="col" key={character.id}>
                                <div className="card">
                                    <img src={character.image} alt="" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </main>
    )
}