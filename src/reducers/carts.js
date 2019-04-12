var initialState = [];
var _            = require('lodash');

function carts(state=initialState,action){
    switch(action.type){
        case "ADDTOCARTS":

        // 是不是接收到一个对象，而这个对象仅仅是不带addToCart函数节点的json object
        var pos = _.findIndex(state,{id: action.payload.id});
        if(pos !== -1){
            // 直接修改节点
            state[pos].quantity = state[pos].quantity + 1;
            state[pos].subTotal = state[pos].quantity * state[pos].price.number;
            return [...state];
        }else{
            action.payload.quantity = 1;
            action.payload.subTotal = action.payload.price.number;
            return [...state,action.payload];
        }
        // 如果没有，就是quantity为1
        // 如果有，就是quantity + 1
        case 'INCREASE':
        var pos = _.findIndex(state,{id: action.payload.id});
        state[pos].quantity = state[pos].quantity + 1;
            return [...state,];

        case 'DECREASE':
        var pos = _.findIndex(state,{id: action.payload.id});

        if( state[pos].quantity >0){
                state[pos].quantity = state[pos].quantity - 1;
                return [...state];
        }else{
            state[pos].quantity =0 ;
            return [...state];
        }
        default:
            return state;
    }
}

export default carts;