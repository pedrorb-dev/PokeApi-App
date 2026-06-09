import { useState } from "react";
import Logo from "../assets/pokeapi-logo.png";

interface Props {
    setName: (name: string) => void;
}

function Header({ setName }: Props) {
    const [search, setSearch] = useState("");

    const handlerKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            setName(search);      // Envía el valor actual del input
            // Opcional: limpiar el input después de buscar
            // setSearch("");
        }
    };

    const handleClear = () => {
        setSearch("");
        setName("");
    };

    return (
        <header className="header-header">
            <div className="title-header">
                <img src={Logo} className="logo-header" alt="" />
                <h1>PokéDev</h1>
            </div>

            <input
                value={search}
                onChange={(e) => setSearch(e.currentTarget.value)}
                onKeyDown={handlerKey}
                type="text"
                className="input-header"
                placeholder="Buscar Pokémon..."
            />
        </header >
    );
}

export default Header;