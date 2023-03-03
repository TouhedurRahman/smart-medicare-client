
export const intialstate = {
    cart:[]
};
export  function reducer(state,action){
       const value = state.cart.find(item=>item._id===action.payload?._id)
    let item = localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];
   
    switch(action.type){
        case "ADD_TO_CART":
              
            if(value){
               const totalProduct = state.cart.filter(item=>item._id!==action.payload?._id)
               value.quantity=value.quantity+1;
               localStorage.setItem("cart",JSON.stringify(totalProduct))
               return{
                 ...state,
                 cart:[...totalProduct, value]
               }
            }
             if(item.length){
                return {
                    ...state,
                    cart:[...state.cart,...item]
                }
             }
            return {
                ...state,
                cart:[...state.cart,{...action.payload,quantity:1}]
            }
            case "REMOVE_TO_CART":
                if(value?.quantity>1){
                    const totalProduct = state.cart.filter(item=>item._id!==action.payload?._id)
                    value.quantity=value.quantity-1;
               return{
                 ...state,
                 cart:[...totalProduct, value]
               }
                }
                return {
                    ...state,
                    cart:state.cart.filter(product=>product._id!==action.payload?._id )
                };
                
            default:
                return state;
    }
}
 