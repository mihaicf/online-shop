export function addToFavourite(payload) {
    return {
        type: 'ADD_TO_FAVOURITE',
        payload
    }
}

export function removeFromFavourite(payload) {
    return {
        type: 'REMOVE_FROM_FAVOURITE',
        payload
    }
}