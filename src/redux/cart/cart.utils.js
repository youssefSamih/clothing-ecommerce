export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if(existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if(existingCartItem.quantity <= 1) {
        const toRemove = window.confirm("Are you sure you went to remove this item from shoping cart !")
        if(toRemove){
            return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id )
        }
    }

    if(existingCartItem.quantity === 0) {
            return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id )
    }

    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}