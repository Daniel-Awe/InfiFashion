/**
 * @param {any[]} list
 * @param {any} id
 * @returns any
 */
export const getDataById = (list, id) => list.find(value => value.id === id)
