// import { Skeleton } from "@material-ui/lab"

import Skeleton from '@material-ui/lab/Skeleton';

const Content = ({ clicked, submit, input, setInput, recipes }) => {

    return (
        <div className="content">
            { !clicked && <h1>INITIAL CONTENT</h1>}
            { clicked && 
                <>
                    <form onSubmit={submit}>
                        <input type="text" placeholder="search for recipes" value={input} onChange={(e) => setInput(e.target.value)}/>
                        <button>Search</button>
                    </form>

                    {recipes.map(recipe => (
                        <div key={recipe.recipe.uri} className='recipe-card'>
                            { recipe ? (
                                <h1 className='recipe-title'>{recipe.recipe.label}</h1>
                            ) : (
                                <Skeleton variant="rect" width={210} height={118} />
                            ) }
                            <img src={recipe.recipe.image ? recipe.recipe.image : 'https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png'} alt={recipe.recipe.label} />
                            <h6>{Math.round(recipe.recipe.calories)} Cal</h6>
                        </div>
                    ))}
                </>
            }
        </div>
    )
}

export default Content

{/* <Skeleton variant="rect" width={210} height={118} /> */}