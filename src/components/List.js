import React, { useState, useEffect } from 'react'
import Character from './Character'

const List = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_ENDPOINT = 'https://rickandmortyapi.com/api/character';
  
  useEffect(() => {
      const fetchData = async () => {
        let result = await fetch(API_ENDPOINT);
        let {results} = await result.json();
        setCharacters(results)
        setLoading(false)
        console.log(characters)
        }
      fetchData();
    }, [characters.length]
  )
  return (
	<>
    <h2>Characters</h2>
    <div className='row'>
      {loading ? <p>Loading...</p> :
      (characters.map((character) => (
      <Character 
        key={character.id} 
        name={character.name} 
        origin={character.origin} 
        image={character.image} />)))}
    </div>
  </>
  )
}

export default List