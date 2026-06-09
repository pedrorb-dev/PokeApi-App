import { useEffect, useState } from "react";
import type { TopLevel } from "../utils/pokemons";
import axios from "axios";

interface Props {
    url: string;
    name: string;
    onclick?: () => void;
}

const PokeItem = ({ url, name, onclick }: Props) => {
    const [character, setCharacter] = useState<TopLevel>()

    useEffect(() => {
        axios.get(`${url}`)
            .then(res => setCharacter(res.data))
            .catch(error => console.log(error))
    }, [url])

    return (
        <div className='main-item' onClick={onclick}>

            <img style={{ width: 150 }} src={character?.sprites?.front_default} alt="" />

            <span>{character?.id}</span>
            <h1 className="title-item">{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
            <div className="habilities">
                {character?.abilities?.map((value, index) => (

                    <span key={index} className="hability-item">{value.ability?.name}</span>

                ))}
            </div>
        </div>
    )
}

export default PokeItem