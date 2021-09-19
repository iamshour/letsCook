import Recipe from "./Recipe";
import "../styles/main.scss"

const Content = ({ input, setInput, recipes, submit, loading }) => {

    return (
        <div className="content">
            
            <form onSubmit={submit}>
                <input type="text" placeholder="search for recipes" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button>Search</button>
            </form>
            { loading && <div>Loading...</div>}
            { !loading &&
                <div className='recipes-container'>
                    {recipes.map(recipe => (
                        <Recipe 
                            key={recipe.recipe.uri}
                            id={recipe.recipe.uri}
                            image={recipe.recipe.image}
                            calories={recipe.recipe.calories}
                            label={recipe.recipe.label}
                        />
                    ))}
                </div>
            }
        </div>
    )
}

export default Content