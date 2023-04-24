import './Button.css'
import PropTypes from "prop-types"; 
const Button = ({onClick}) => {


    return(
        
        <button className="Button" onClick={onClick} type="button">Load more</button>
    )
}

Button.propTypes = {
    onClick:PropTypes.func.isRequired
}
export default Button;