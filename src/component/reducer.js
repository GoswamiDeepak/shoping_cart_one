export const reducer = (state, action) =>{
    if(action.type ==='REMOVE') {
        return{
            ...state ,
            items: state.items.filter((crrItem, index)=>{
                return crrItem.id !== action.payload
            })
        }
    }

    if(action.type === 'CLEARITEMS') {
        return {
            ...state,
            items: []
        }
    }

    if(action.type === 'INCR') {
        let updateItem = state.items.map((crrItm)=> {
            if(crrItm.id === action.payload) {
                return {
                    ...crrItm,
                    quantity:crrItm.quantity + 1
                };
            }
            return crrItm;
        })
        return {
            ...state,
            items:updateItem
        };
    }

    if(action.type === 'DECR') {
        let updateNItems = state.items.map((crrItem)=> {
            if(crrItem.id === action.payload) {
                return {
                    ...crrItem,
                    quantity:crrItem.quantity - 1
                };

                
            }
            return crrItem;
        }).filter((crrItem)=> {
            return crrItem.quantity !== 0;
        })

        return {
            ...state,
            items : updateNItems
        }
    }


    return state;
}