import { useEffect, useState } from "react"
import type { TopLevel } from "../utils/pokemons"
import axios from "axios"

const PokeDetail = ({ url }: any) => {
    const [character, setCharacter] = useState<TopLevel>()

    useEffect(() => {
        if (!url) return;
        axios.get(`${url}`)
            .then(res => setCharacter(res.data))
            .catch(error => console.log(error))
    }, [url])

    return (
        <>
            {
                character && (
                    <div className="main-detail">
                        <img style={{ width: 200 }} src={character?.sprites.front_default} alt="" />

                        <span className="id-item">#{character?.id}</span>
                        <h1 className="title-item">{character.name.charAt(0).toUpperCase() + character.name.slice(1)}</h1>
                        <div className="habilities">
                            {character?.abilities.map((value, index) => (

                                <span key={index} className="hability-item">{value.ability?.name}</span>

                            ))}
                        </div>
                        <div className="container-height-weight">
                            <div className="height-detail">
                                <h2>Altura</h2>
                                <h4>{character.height / 10} m</h4>
                            </div>
                            <div className="weight-detail">
                                <h2>Peso</h2>
                                <h4>{character.weight / 10} kg</h4>
                            </div>
                        </div>
                        <div className="detail-pokemon">
                            {
                                character.stats.map((value, index) => (
                                    <div className="dato-pokemon">
                                        <h4>{value.stat.name}</h4>
                                        <meter
                                            low={50}
                                            high={90}
                                            optimum={75}
                                            key={index}
                                            value={value.base_stat}
                                            min={0}
                                            max={150}
                                        >
                                        </meter>
                                        {value.base_stat}%
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )

            }
        </>

    )
}

export default PokeDetail