import { useEffect, useState } from "react"
import type { TopLevel } from "../utils/pokemons"
import axios from "axios"

export const usePokemon = () => {
    const [character, setCharacter] = useState<TopLevel | null>(null)
    const [name, setName] = useState<String>("")

    useEffect(() => {
        if (!name || name == "") {
            setCharacter(null)
            return
        }
        const urlBase = "https://pokeapi.co/api/v2/pokemon";

        axios.get(`${urlBase}/${name.toLowerCase()}`)
            .then(res => setCharacter(res.data))
            .catch(error => console.log(error))
    }, [name])

    return { character, setName, setCharacter }
}