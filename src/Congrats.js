import React from "react"
import PropTypes from "prop-types"

/**
 * Functionnal react component for congratulatory message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element}
 */

const Congrat =(props)=>{
    return(
        <>
        {
            props.success?
            <div data-test="component-congrats">
                <span data-test="congrats-message"> Congratulations! You guessed the word!</span>
            </div>
            :
            <div data-test="component-congrats"/>
        }
        </>
    )
}

Congrat.propTypes={
    success: PropTypes.bool.isRequired
}


export default Congrat