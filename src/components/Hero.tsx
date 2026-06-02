import axios from 'axios';
import { useEffect, useState } from 'react'
import PokeItem from './PokeItem';
import PokeDetail from './PokeDetail';

const Hero = () => {
    const [results, setResults] = useState<any>(null)
    const [selected, setSelected] = useState<any>(null)
    const urlBase = "https://pokeapi.co/api/v2/pokemon";

    useEffect(() => {
        axios.get(`${urlBase}`, { params: { limit: 50 } })
            .then(res => setResults(res.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='main-hero'>
            <div className='list-hero'>

                {results?.results?.map((pokemon: any,) => (
                    <PokeItem onclick={() => setSelected(pokemon)} key={pokemon.name} url={pokemon.url} name={pokemon.name} />
                ))}
            </div>
            {
                selected && (
                    <div className='detail-pokemon'>
                        <PokeItem key={selected.name} url={selected.url} name={selected.name} />
                    </div>
                )
            }
        </div>
    )
}

export default Hero