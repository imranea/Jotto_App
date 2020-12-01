import React from "react"

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


export default Congrat