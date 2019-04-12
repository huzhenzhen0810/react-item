export const addToCart = (data)=>{
    return {
        type   : 'ADDTOCARTS',
        payload: data
    }
}
export const IncreaseNum = (data)=>{
    return {
        type: 'INCREASE',
        payload: data
    }
}

export const DecreaseNum = (data)=>{
    return {
        type: 'DECREASE',
        payload: data
    }
}