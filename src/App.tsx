import Header from "./components/Header"
import "./App.css"
import Hero from "./components/Hero"
import { usePokemon } from "./hooks/usePokemon"

const App = () => {
  const { setName, character } = usePokemon()
  return (
    <>
      <Header setName={setName} />
      <Hero character={character} />
    </>
  )
}

export default App