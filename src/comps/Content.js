import Recipe from "./Recipe";
import "../styles/main.scss"

const Content = ({ submit, input, setInput, recipes, isLoading }) => {

    return (
        <div className="content">
            <form onSubmit={submit}>
                <input type="text" placeholder="search for recipes" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button>Search</button>
            </form>
            <div>
                { isLoading ? <h1>Loading...</h1> : <div className='recipes-container'>
                    {recipes.map(recipe => (
                        <Recipe 
                            key={recipe.recipe.uri}
                            image={recipe.recipe.image}
                            calories={recipe.recipe.calories}
                            label={recipe.recipe.label}
                            alt={recipe.recipe.label}
                        />
                    ))}
                </div>
                }
            </div>
        </div>
    )
}

export default Content