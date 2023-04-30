export const stepColorAndImage = (colors , dispatch) => {
    dispatch({type: 'activeColor-activeImage', payload: colors})
    dispatch({type: 'updateLocalStorage'})
}
export const stepCapacity = (Capacity , dispatch) => {
    dispatch({type: 'activeCapacity', payload: Capacity})
    dispatch({type: 'updateLocalStorage'})
}

