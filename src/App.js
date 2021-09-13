import { useEffect, useState } from "react"
import Content from "./comps/Content"
import Header from "./comps/Header"
import "./styles/main.scss"

function App() {

  const [recipes, setRecipes] = useState([])
  const [input, setInput] = useState("")
  const [results, setResults] = useState("")

  const [clicked, setClicked] = useState(false)

  const APP_ID = "a29e959d"
  const APP_KEY = "850cd17a4cf7f69f605fda6ee40ecf61"

  const getRecipes = async () => {
    const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${results}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await res.json()
    
    setRecipes(data.hits)
    console.log(data.hits)
  }

  useEffect(() => {
    getRecipes()
  }, [results])

  const submit = (e) => {
    e.preventDefault()
    setResults(input)
    setInput('')
  }

  return (
    <div className="app">
      <Header clicked={clicked} setClicked={setClicked} setResults={setResults}/>
      <Content clicked={clicked} input={input} setInput={setInput} submit={submit} recipes={recipes}/>
    </div>
  );
}

export default App;
