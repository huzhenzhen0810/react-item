var initialState =[]

function Caroursel(state = initialState ,action) {


    switch(action.type){
        case 'CAROURSELLIST':
            return [...action.payload];
        default:
            return state;
    }
}
export default Caroursel;


