import axios from 'axios';
import { useEffect, useState } from 'react'
import PokeItem from './PokeItem';
import PokeDetail from './PokeDetail';

const Hero = ({ character }: any) => {
    const [results, setResults] = useState<any>(null)
    const [selected, setSelected] = useState<any>(null)
    const urlBase = "https://pokeapi.co/api/v2/pokemon";

    useEffect(() => {
        axios.get(urlBase, { params: { limit: 10 } })
            .then(res => setResults(res.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='main-hero'>
            <div className='list-hero'>
                {
                    character ? (
                        <PokeItem
                            onclick={() => setSelected({ url: `https://pokeapi.co/api/v2/pokemon/${character.name}`, name: character.name })}
                            key={character.name}
                            url={`https://pokeapi.co/api/v2/pokemon/${character.name}`}
                            name={character.name} />
                    ) : (
                        results?.results?.map((pokemon: any) => (
                            <PokeItem onclick={() => setSelected(pokemon)} key={pokemon.name} url={pokemon.url} name={pokemon.name} />
                        ))
                    )
                }

            </div>
            {
                selected && (
                    <div className='detail-pokemon'>
                        <PokeDetail url={selected.url} />
                    </div>
                )
            }

        </div>
    )
}

export default Hero