export const actionTypes = {
    CORRECT_GUESS:'CORRECT_GUESS',
    GUESS_WORD:'GUESS_WORD',
};

/**
 * Returns Redux thunk function that dispatches GUESS_WORD action
 *  and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord 
 * @returns {function} - Redux thunk function
 */

export const guessWord = (guessedWord) =>{
    return function(dispatch,getState){

    };
}