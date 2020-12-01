/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */

export const findByAttrib = (wrapper,val) => wrapper.find(`[data-test="${val}"]`)