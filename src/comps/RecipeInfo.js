import { useEffect } from "react"

const RecipeInfo = ({ id }) => {

    useEffect(() => {
        const getSingleRecipe = async () => {
            const req = await fetch(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`)
            const res = await req.json()
            console.log(res)
            // setSingleRecipe(res.recipe)
        } 
        getSingleRecipe()
    }, [])
    
    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, dignissimos. Dignissimos alias ipsum natus aspernatur facere. Accusantium sequi quisquam officiis totam nobis perferendis ducimus porro expedita sed iste recusandae eos dolores, odio saepe fugit, corrupti dolore neque deleniti eligendi. Reprehenderit ad fuga reiciendis velit repellendus. Sed, enim asperiores. Aspernatur et, accusantium illo magnam reprehenderit incidunt.</p>
        </div>
    )
}

export default RecipeInfo
