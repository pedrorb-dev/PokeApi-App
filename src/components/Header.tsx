import Logo from "../assets/pokeapi-logo.png"


function Header() {
    return (
        <header className="header-header">
            <div className="title-header">
                <img src={Logo} className="logo-header" alt="" />
                <h1>PokéDev</h1>
            </div>
            <input type="text" className="input-header" placeholder="Buscar Pokémon..." />
        </header>
    )
}

export default Header