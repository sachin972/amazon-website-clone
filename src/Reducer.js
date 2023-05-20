export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) => 
    basket?.reduce((amount,item)=> item.price + amount, 0);


export const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'Add':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case 'Remove':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )

            let newBasket = [...state.basket];

            if(index >= 0){
                newBasket.splice(index,1);
            }
            else{
                console.warn('Cannot delete this item, as it is not in the basket');
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'Set_User':
            return{
                ...state,
                user: action.user
            }

        default:
            return state;

    }
}