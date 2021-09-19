import { useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Content from "./comps/Content"
import Header from "./comps/Header"
import Home from "./comps/Home"
import RecipeInfo from "./comps/RecipeInfo"
import "./styles/main.scss"

function App() {

  const [recipes, setRecipes] = useState([])
  const [input, setInput] = useState('')
  const [results, setResults] = useState('')

  const [loading, setLoading] = useState(false)

  const [isHome, setIsHome] = useState(false)

  const submit = (e) => {
    setLoading(true)
    setResults('')
    e.preventDefault()
    setResults(input)
    setInput('')
  }

  useEffect(() => {

    const controller = new AbortController();

    const getRecipes = async () => {
      try {
        const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${results}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`, { signal: controller.signal });
        const data = await res.json();
        console.log('Got Response!');
        setRecipes(data.hits);
        setLoading(false);
      }
      catch (error) {
        if (error.name === 'AbortError') {
          console.log('Caught Abort');
        } else {
          throw error;
        }
      }
    }

    getRecipes()
    //eslint-disable-next-line

    return () => {
      console.log('Unmouting!')
      controller.abort();
    };

  }, [results])

  return (
    <div className="app">
      <Router>
        <Header setResults={setResults} isHome={isHome} setIsHome={setIsHome} setInput={setInput} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Content" component={Content}>
            <Content input={input} setInput={setInput} recipes={recipes} submit={submit} loading={loading} />
          </Route>
          <Route path="/Recipeinfo/:id" component={RecipeInfo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
