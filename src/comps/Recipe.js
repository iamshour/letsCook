import { motion } from "framer-motion"
import { BiBookContent } from "react-icons/bi"
import "../styles/main.scss"

const Recipe = ({ image, calories, label, alt }) => {
    return (
        <motion.div
            className='recipe-card'
            initial={{opacity: 0}}
            animate={{opacity: 1, animationDelay: 0.4}}
            whileTap={{ scale: 0.99 }}
            layout
        >
            <h6>{Math.round(calories)} Cal</h6>
            <motion.img src={image ? image : 'https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png'} alt={alt} 
                initial={{opacity: 0.9}}
                whileHover={{opacity: 1}}
            />
            <div className="bottom">
                <h1 className='recipe-title'>
                    {label.length < 25 ? label : `${label.substring(0, 27)}...`}
                </h1>
                <BiBookContent className='navigate'/>
            </div>
        </motion.div>
    )
}

export default Recipe
