import { useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Content from "./comps/Content"
import Header from "./comps/Header"
import Home from "./comps/Home"
import "./styles/main.scss"

function App() {

  const [recipes, setRecipes] = useState([])
  const [input, setInput] = useState('')
  const [results, setResults] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [clicked, setClicked] = useState(false)

  const APP_ID = "a29e959d"
  const APP_KEY = "850cd17a4cf7f69f605fda6ee40ecf61"

  useEffect(() => {

    const getRecipes = async () => {
      setIsLoading(true)
      const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${results}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await res.json()
      
      setRecipes(data.hits)
      setIsLoading(false)
      // console.log(data.hits)
    }

    getRecipes()
    // eslint-disable-next-line
  }, [results])

  const submit = (e) => {
    setResults('')
    e.preventDefault()
    setResults(input)
    setInput('')
  }

  return (
    <div className="app">
      <Router>
      <Header clicked={clicked} setClicked={setClicked} setResults={setResults}/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/Content" component={Content}>
          <Content  submit={submit} input={input} setInput={setInput} recipes={recipes} isLoading={isLoading}/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
